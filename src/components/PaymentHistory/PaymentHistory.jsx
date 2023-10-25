import React from "react";
import { useQuery } from "@tanstack/react-query";
import { paymentServices } from "../../services/payments";
import { getToken } from "../../utils/cookies";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import { refundServices } from "../../services/refunds";
import { Toast } from "../../utils/toast";
import { useTable, useSortBy, usePagination } from "react-table";

function formatPurchaseType(purchaseType) {
  // Split the purchaseType string by underscores and capitalize each word
  const words = purchaseType
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  // Join the words with spaces to create the final formatted string
  return words.join(" ");
}

function readableDateTime(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    // timeZoneName: "short",
  };
  const readableDate = date.toLocaleDateString(undefined, options);
  return readableDate;
}

const PaymentHistory = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["payments", "history"],
    queryFn: async () => {
      return await paymentServices.getPaymentsByUser(getToken().token);
    },
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "SL",
        accessor: "id",
      },
      {
        Header: "Transaction ID",
        accessor: "transaction_id",
      },
      {
        Header: "Method",
        accessor: "method",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Reason",
        accessor: (row) => formatPurchaseType(row.reason),
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Date",
        accessor: (row) => readableDateTime(row.trnx_time),
      },
      {
        Header: "Action",
        accessor: "acid", // We'll handle actions for the entire row
      },
    ],
    []
  );

  const dataForTable = data?.data || [];

  const tableInstance = useTable(
    {
      columns,
      data: dataForTable,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
  } = tableInstance;

  const handleRequestRefund = async (item) => {
    try {
      // Extract the necessary data from the item
      const { id, payment_id, transaction_id, amount } = item;

      // Make the API request to add a refund request
      const response = await refundServices.addRefundRequest(
        {
          user_id: id, // User ID
          payment_id, // Payment ID
          transaction_id, // Transaction ID
          amount, // Refund amount
          refund_status: "requested", // Set to 'requested'
          refund_req_time: new Date(), // Current time
        },
        getToken().token
      );
      if (response?.success) {
        Toast.successToast("Your Request is sent to admin");
      }
      await refetch();
      // Handle the response as needed
      console.log(response);
    } catch (error) {
      // Handle any errors
      console.error("Error requesting refund:", error);
      const msg = error?.response?.data?.message || error?.message;
      Toast.errorToast(msg);
    }
  };

  return (
    <div className="col right-sidebar-main my-favs">
      {isLoading ? (
        <LoadingCircle />
      ) : data?.data?.length > 0 ? (
        <div className="my-favs-info border-t-2 w-auto rounded shadow">
          <h5 className="card-title text-center text-2xl my-3">
            পেমেন্ট হিস্টোরি
          </h5>
          <div className="overflow-x-auto">
            <table {...getTableProps()} className="table-auto w-full">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()} className="border-b border-t">
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className="px-4 py-2 text-center w-1/7"
                      >
                        {column.render("Header")}
                        {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, rowIndex) => {
                  prepareRow(row);
                  return (
                    <tr key={rowIndex}>
                      {row.cells.map((cell, cellIndex) => {
                        return (
                          <td key={cellIndex} {...cell.getCellProps()}>
                            {cellIndex === columns.length - 1 ? (
                              row.original.status === "Completed" &&
                              (row.original.reason === "bio_purchase" || row.original.reason === "buy_points") ? (
                                row.original.refund_status === "pending" ? (
                                  <button
                                    onClick={() => handleRequestRefund(row.original.original)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 mb-2 rounded"
                                  >
                                    Request Refund
                                  </button>
                                ) : (
                                  <button
                                    className="bg-gray-300 hoverbg-gray-400 text-gray-800 text-xs py-2 px-4 mb-2 rounded"
                                    disabled
                                    style={{ cursor: "not-allowed" }}
                                    aria-label={row.original?.refund_status}
                                  >
                                    {row.original?.refund_status}
                                  </button>
                                )
                              ) : (
                                <div className="text-xs py-4 px-4 text-red-700">
                                  Not Refundable
                                </div>
                              )
                            ) : (
                              cell.render("Cell")
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="pagination pt-4 pb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer" onClick={() => tableInstance.previousPage()} disabled={pageIndex === 0}>
              Previous Page
            </button>{" "}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
              onClick={() => tableInstance.nextPage()}
              disabled={pageIndex >= Math.ceil(dataForTable.length / pageSize) - 1}
            >
              Next Page
            </button>{" "}
          </div>
        </div>
      ) : (
        <p>There is no payment history</p>
      )}
    </div>
  );
};

export default PaymentHistory;

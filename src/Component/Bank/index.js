import { useEffect, useState } from "react";
import bank from "../../assets/bob.png";
import Contact from "../../assets/contact.png";
import Page from "./page";
import { useSearchParams } from "react-router-dom";
import moment from "moment";
const accountNumber = 38880100000291;

export default function Bank() {
  const [dataSet, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page");
  const from = +searchParams.get("from");
  const size = +searchParams.get("size");
  const isLast = !!+searchParams.get("last");

  useEffect(() => {
    document.body.style.background = "#fff";
    fetch(
      "https://script.google.com/macros/s/AKfycbyskSNx4_0eW0maKHJVR2wFnT9Tjy6dj_6KeitAvwyWcdD0w5Ns_r7N7CVY_nSEHwcqpg/exec"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.splice(from, size));
      });
  }, []);

  const renderTable = () => {
    return dataSet.map((el, i) => (
      <tr style={{ height: "21pt" }}>
        <td
          style={{ width: "49pt" }}
          bgcolor={i % 2 !== 0 ? "#FFEBE4" : "#fff"}>
          <p
            className="s6"
            style={{
              paddingTop: "4pt",
              paddingLeft: "1pt",
              paddingRight: "1pt",
              textIndent: "0pt",
              textAlign: "center",
              fontSize: "14px",
            }}>
            {moment(el.date).format("YYYY-MM-DD")}
          </p>
        </td>
        <td
          style={{ width: "173pt" }}
          bgcolor={i % 2 !== 0 ? "#FFEBE4" : "#fff"}>
          <p
            className="s6"
            style={{
              paddingLeft: "3pt",
              textIndent: "0pt",
              lineHeight: "11pt",
              textAlign: "left",
              fontSize: "14px",
            }}>
            {el.narration}
          </p>
        </td>
        <td
          style={{ width: "36pt" }}
          bgcolor={i % 2 !== 0 ? "#FFEBE4" : "#fff"}>
          <p
            className="s6"
            style={{
              paddingLeft: "3pt",
              textIndent: "0pt",
              lineHeight: "11pt",
              textAlign: "left",
            }}>
            {el.chqNo}
          </p>
        </td>
        <td
          style={{ width: "93pt" }}
          bgcolor={i % 2 !== 0 ? "#FFEBE4" : "#fff"}>
          <p
            className="s6"
            style={{
              paddingLeft: "3pt",
              textIndent: "0pt",
              lineHeight: "11pt",
              textAlign: "right",
              fontSize: "14px",
            }}>
            {el?.debit ? el?.debit?.toFixed(2) : ""}
          </p>
        </td>

        <td
          style={{ width: "94pt" }}
          bgcolor={i % 2 !== 0 ? "#FFEBE4" : "#fff"}>
          <p
            className="s6"
            style={{
              paddingTop: "4pt",
              paddingRight: "1pt",
              textIndent: "0pt",
              textAlign: "right",
              fontSize: "14px",
            }}>
            {el?.credit ? el?.credit?.toFixed(2) : ""}
          </p>
        </td>
        <td
          style={{ maxWidth: "180pt" }}
          colSpan="1"
          bgcolor={i % 2 !== 0 ? "#FFEBE4" : "#fff"}>
          <p
            className="s6"
            style={{
              paddingTop: "4pt",
              paddingRight: "1pt",
              textIndent: "0pt",
              textAlign: "right",
              marginRight: "10px",
              fontSize: "14px",
            }}>
            {(+el.balance)?.toFixed(2)} Cr
          </p>
        </td>
      </tr>
    ));
  };

  return (
    <div style={{ background: "#fff" }}>
      <Page num={page + 1}>
        <br />
        <br />
        {page === 0 ? (
          <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <img height="100" src={bank} />
            </div>
            <div style={{ fontWeight: "700" }}>
              <div
                style={{ borderTop: "1px solid #ff6632", paddingTop: "6px" }}>
                MISS RUPALI VAISHNAV DO DEVIDAS VAISHNAV
              </div>
              <br />
              <div style={{ marginBottom: "7px" }}>
                HIG-38, Hari Singh gour colony, Makroniya
              </div>
              <div style={{ marginBottom: "7px" }}>Sagar - 470004</div>
              <div>MADHYA PRADESH,INDIA</div>
            </div>
            <div
              style={{
                fontSize: "15px",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "5px",
              }}>
              CUSTOMER ID - 064907823
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                borderBottom: "1px solid #ff6632",
                fontSize: "14px",
                paddingBottom: "4px",
              }}>
              <div>Your Account Statement as on Feb 15, 2024</div>
              <div>Statement Period from Jan 01, 2024 to Nov 31, 2024</div>
            </div>
            <br />
            <br />
            {summary()}
            <br />
          </>
        ) : null}
        <div
          style={{
            fontSize: "14px",
            borderTop: page === 0 ? "" : "1px solid",
            paddingTop: "20px",
          }}>
          Statement of transactions in Savings Account {accountNumber} in INR
          for the period Jun 01, 2020 - Nov 31, 2023
        </div>
        <br />

        {header(
          dataSet,
          dataSet[dataSet.length - 1]?.balance,
          renderTable,
          isLast,
          page
        )}
        <br />
        {isLast && (
          <>
            {" "}
            {AbbreviationsTable()}
            <br />
            {NomineeDetailsTable()}
            <br />
            {BranchDetailsTable()}
            <div>
              <br />
              <img style={{ width: "100%" }} src={Contact} />
              <br />
            </div>
          </>
        )}
      </Page>
    </div>
  );
}

const summary = () => (
  <>
    <div style={{ fontSize: "14px", fontWeight: "600" }}>
      A summary of your relationship/s with us:
    </div>
    <br />
    <tbody>
      <tr style={{ height: "12pt" }}>
        <td
          style={{
            width: "121pt",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s5"
            style={{
              paddingTop: "1pt",
              paddingLeft: "9pt",
              textIndent: "0pt",
              lineHeight: "9pt",
              textAlign: "left",
              fontSize: "12px",
              fontWeight: 600,
            }}>
            Relationship Type
          </p>
        </td>
        <td
          style={{
            width: "86pt",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s5"
            style={{
              paddingTop: "1pt",
              paddingLeft: "22pt",
              textIndent: "0pt",
              lineHeight: "9pt",
              textAlign: "left",
              fontSize: "12px",
              fontWeight: 600,
            }}>
            Currency
          </p>
        </td>
        <td
          style={{
            width: "86pt",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s5"
            style={{
              paddingTop: "1pt",
              paddingRight: "19pt",
              textIndent: "0pt",
              lineHeight: "9pt",
              textAlign: "right",
              fontSize: "12px",
              fontWeight: 600,
            }}>
            Assets
          </p>
        </td>
        <td
          style={{
            width: "71pt",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s5"
            style={{
              paddingTop: "1pt",
              paddingRight: "12pt",
              textIndent: "0pt",
              lineHeight: "9pt",
              textAlign: "right",
              fontSize: "12px",
              fontWeight: 600,
            }}>
            Liabilities
          </p>
        </td>
      </tr>
      <tr style={{ height: "12pt" }}>
        <td
          style={{
            width: "121pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingLeft: "9pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "left",
              fontSize: "12px",
            }}>
            SAVINGS ACCOUNT
          </p>
        </td>
        <td
          style={{
            width: "86pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingLeft: "22pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "left",
              fontSize: "12px",
            }}>
            INR
          </p>
        </td>
        <td
          style={{
            width: "86pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingRight: "19pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "right",
              fontSize: "12px",
            }}>
            10720.31
          </p>
        </td>
        <td
          style={{
            width: "71pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingRight: "12pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "right",
              fontSize: "12px",
            }}>
            0.00
          </p>
        </td>
      </tr>
      <tr style={{ height: "12pt" }}>
        <td
          style={{
            width: "121pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingLeft: "9pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "left",
              fontSize: "12px",
            }}>
            TERM DEPOSIT ACCOUNT
          </p>
        </td>
        <td
          style={{
            width: "86pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingLeft: "22pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "left",
              fontSize: "12px",
            }}>
            INR
          </p>
        </td>
        <td
          style={{
            width: "86pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingRight: "19pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "right",
              fontSize: "12px",
            }}>
            262204.00
          </p>
        </td>
        <td
          style={{
            width: "71pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingRight: "12pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "right",
              fontSize: "12px",
            }}>
            0.00
          </p>
        </td>
      </tr>
      <tr style={{ height: "12pt" }}>
        <td
          style={{
            width: "121pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingLeft: "9pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "left",
              fontWeight: 600,
              fontSize: "12px",
            }}>
            TOTAL (INR)
          </p>
        </td>
        <td
          style={{
            width: "86pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingLeft: "22pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "left",
              fontWeight: 600,
              fontSize: "12px",
            }}>
            INR
          </p>
        </td>
        <td
          style={{
            width: "86pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingRight: "19pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "right",
              fontWeight: 600,
              fontSize: "12px",
            }}>
            272924.31
          </p>
        </td>
        <td
          style={{
            width: "71pt",
            borderTop: "1pt solid #FFFFFF",
            borderBottom: "1pt solid #FFFFFF",
            backgroundColor: "#FFEBE4",
          }}>
          <p
            className="s6"
            style={{
              paddingRight: "12pt",
              textIndent: "0pt",
              lineHeight: "10pt",
              textAlign: "right",
              fontWeight: 600,
              fontSize: "12px",
            }}>
            0.00
          </p>
        </td>
      </tr>
    </tbody>
  </>
);

const header = (dataSet, currentBalance, renderTable, isLast, page) => (
  <table style={{ borderCollapse: "collapse", width: "100%" }} cellSpacing="0">
    <tbody>
      <tr style={{ height: "13pt" }}>
        <td style={{ width: "222pt" }} colSpan="2" bgcolor="#FF6633">
          <p
            className="s7"
            style={{
              paddingTop: "1pt",
              paddingLeft: "5pt",
              textIndent: "0pt",
              textAlign: "left",
              color: "#fff",
              fontWeight: "600",
            }}>
            RUPALI DO DEVIDAS VAISHNAV
          </p>
        </td>
        <td style={{ width: "129pt" }} colSpan="2" bgcolor="#FF6633">
          <p style={{ textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
        </td>
        <td style={{ width: "188pt" }} colSpan="2" bgcolor="#FF6633">
          <p
            className="s7"
            style={{
              paddingTop: "2pt",
              paddingLeft: "34pt",
              textIndent: "0pt",
              textAlign: "left",
              color: "#fff",
              fontWeight: "600",
            }}>
            SAVINGS ACCOUNT - {accountNumber}
          </p>
        </td>
      </tr>
      <tr style={{ height: "13pt" }}>
        <td
          style={{
            width: "49pt",
            borderRightStyle: "solid",
            borderRightWidth: "1pt",
            borderRightColor: "#8B7D6B",
          }}
          bgcolor="#BDA081">
          <p
            className="s8"
            style={{
              paddingTop: "2pt",
              paddingLeft: "13pt",
              paddingRight: "13pt",
              textIndent: "0pt",
              textAlign: "center",
              color: "#fff",
              fontWeight: "600",
              fontSize: "14px",
            }}>
            DATE
          </p>
        </td>
        <td
          style={{
            width: "173pt",
            borderLeftStyle: "solid",
            borderLeftWidth: "1pt",
            borderLeftColor: "#8B7D6B",
            borderRightStyle: "solid",
            borderRightWidth: "1pt",
            borderRightColor: "#8B7D6B",
          }}
          bgcolor="#BDA081">
          <p
            className="s8"
            style={{
              paddingTop: "2pt",
              paddingLeft: "63pt",
              paddingRight: "63pt",
              textIndent: "0pt",
              textAlign: "center",
              color: "#fff",
              fontWeight: "600",
              fontSize: "14px",
            }}>
            NARRATION
          </p>
        </td>
        <td
          style={{
            width: "36pt",
            borderLeftStyle: "solid",
            borderLeftWidth: "1pt",
            borderLeftColor: "#8B7D6B",
            borderRightStyle: "solid",
            borderRightWidth: "1pt",
            borderRightColor: "#8B7D6B",
          }}
          bgcolor="#BDA081">
          <p
            className="s8"
            style={{
              paddingTop: "2pt",
              paddingLeft: "1pt",
              textIndent: "0pt",
              textAlign: "left",
              color: "#fff",
              fontWeight: "600",
              fontSize: "14px",
            }}>
            CHQ.NO.
          </p>
        </td>
        <td
          style={{
            width: "93pt",
            borderLeftStyle: "solid",
            borderLeftWidth: "1pt",
            borderLeftColor: "#8B7D6B",
            borderRightStyle: "solid",
            borderRightWidth: "1pt",
            borderRightColor: "#8B7D6B",
          }}
          bgcolor="#BDA081">
          <p
            className="s8"
            style={{
              paddingTop: "2pt",
              paddingLeft: "21pt",
              textIndent: "0pt",
              textAlign: "left",
              color: "#fff",
              fontWeight: "600",
              fontSize: "14px",
            }}>
            WITHDRAWAL (DR)
          </p>
        </td>
        <td
          style={{
            width: "94pt",
            borderLeftStyle: "solid",
            borderLeftWidth: "1pt",
            borderLeftColor: "#8B7D6B",
            borderRightStyle: "solid",
            borderRightWidth: "1pt",
            borderRightColor: "#8B7D6B",
          }}
          bgcolor="#BDA081">
          <p
            className="s8"
            style={{
              paddingTop: "2pt",
              paddingLeft: "43pt",
              textIndent: "0pt",
              textAlign: "left",
              color: "#fff",
              fontWeight: "600",
              fontSize: "14px",
            }}>
            DEPOSIT (CR)
          </p>
        </td>
        <td
          style={{
            width: "94pt",
            borderLeftStyle: "solid",
            borderLeftWidth: "1pt",
            borderLeftColor: "#8B7D6B",
          }}
          bgcolor="#BDA081">
          <p
            className="s8"
            style={{
              paddingTop: "2pt",
              paddingLeft: "56pt",
              textIndent: "0pt",
              textAlign: "left",
              color: "#fff",
              fontWeight: "600",
              fontSize: "14px",
            }}>
            BALANCE
          </p>
        </td>
      </tr>
      {page === 0 &&
        closingBalance(dataSet, "2020-06-01", "Opening Balance", 230189.34)}
      {renderTable()}
      {isLast &&
        closingBalance(
          dataSet,
          "2023-11-31",
          "Closing Balance",
          currentBalance?.toFixed(2)
        )}
    </tbody>
  </table>
);

const closingBalance = (dataSet, d, t, b) => {
  return (
    <tr style={{ height: "21pt" }}>
      <td
        style={{ width: "49pt" }}
        bgcolor={dataSet.length % 2 === 0 ? "#fff" : "#FFEBE4"}>
        <p
          className="s6"
          style={{
            paddingTop: "4pt",
            paddingLeft: "1pt",
            paddingRight: "1pt",
            textIndent: "0pt",
            textAlign: "center",
            fontSize: "14px",
          }}>
          {d}
        </p>
      </td>
      <td
        style={{ width: "173pt" }}
        bgcolor={dataSet.length % 2 === 0 ? "#fff" : "#FFEBE4"}>
        <p
          className="s6"
          style={{
            paddingLeft: "3pt",
            textIndent: "0pt",
            lineHeight: "11pt",
            textAlign: "left",
            fontSize: "14px",
          }}>
          {t}
        </p>
      </td>
      <td
        style={{ width: "36pt" }}
        bgcolor={dataSet.length % 2 === 0 ? "#fff" : "#FFEBE4"}>
        <p
          className="s6"
          style={{
            paddingLeft: "3pt",
            textIndent: "0pt",
            lineHeight: "11pt",
            textAlign: "left",
          }}></p>
      </td>
      <td
        style={{ width: "93pt" }}
        bgcolor={dataSet.length % 2 === 0 ? "#fff" : "#FFEBE4"}>
        <p
          className="s6"
          style={{
            paddingLeft: "3pt",
            textIndent: "0pt",
            lineHeight: "11pt",
            textAlign: "left",
          }}></p>
      </td>

      <td
        style={{ width: "94pt" }}
        bgcolor={dataSet.length % 2 === 0 ? "#fff" : "#FFEBE4"}>
        <p
          className="s6"
          style={{
            paddingTop: "4pt",
            paddingRight: "1pt",
            textIndent: "0pt",
            textAlign: "right",
          }}></p>
      </td>
      <td
        style={{ width: "94pt" }}
        colSpan="2"
        bgcolor={dataSet.length % 2 === 0 ? "#fff" : "#FFEBE4"}>
        <p
          className="s6"
          style={{
            paddingTop: "4pt",
            paddingRight: "1pt",
            textIndent: "0pt",
            textAlign: "right",
            fontSize: "14px",
            marginRight: "10px",
          }}>
          {b} Cr
        </p>
      </td>
    </tr>
  );
};

const AbbreviationsTable = () => {
  return (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr style={{ height: "13pt" }}>
          <td style={{ width: "539pt" }} colSpan="4" bgcolor="#FF6633">
            <p
              className="s8"
              style={{
                paddingTop: "2pt",
                paddingLeft: "238pt",
                paddingRight: "237pt",
                textIndent: "0pt",
                textAlign: "center",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}>
              ABBREVIATIONS
            </p>
          </td>
        </tr>
        <tr style={{ height: "13pt" }}>
          <td style={{ width: "26pt" }} bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingTop: "2pt",
                paddingLeft: "2pt",
                textIndent: "0pt",
                lineHeight: "9pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              SP
            </p>
          </td>
          <td style={{ width: "170pt" }} bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingTop: "2pt",
                paddingLeft: "9pt",
                textIndent: "0pt",
                lineHeight: "9pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              - Stop Payment
            </p>
          </td>
          <td style={{ width: "105pt" }} bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingTop: "2pt",
                paddingLeft: "76pt",
                textIndent: "0pt",
                lineHeight: "9pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              INT
            </p>
          </td>
          <td style={{ width: "238pt" }} bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingTop: "2pt",
                paddingLeft: "4pt",
                textIndent: "0pt",
                lineHeight: "9pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              - Interest
            </p>
          </td>
        </tr>
        <tr style={{ height: "9pt" }}>
          <td style={{ width: "26pt" }} bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingLeft: "2pt",
                textIndent: "0pt",
                lineHeight: "8pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              EC
            </p>
          </td>
          <td style={{ width: "170pt" }} bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingLeft: "9pt",
                textIndent: "0pt",
                lineHeight: "8pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              - Error Corrected
            </p>
          </td>
          <td style={{ width: "105pt" }} bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingLeft: "76pt",
                textIndent: "0pt",
                lineHeight: "8pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              CBI
            </p>
          </td>
          <td style={{ width: "238pt" }} bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingLeft: "4pt",
                textIndent: "0pt",
                lineHeight: "8pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              - Cheque Book Issue
            </p>
          </td>
        </tr>
        {/* Repeat similar structure for other rows */}
        <tr style={{ height: "11pt" }}>
          <td
            style={{
              width: "26pt",
              borderBottomStyle: "solid",
              borderBottomWidth: "1pt",
            }}
            bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingLeft: "2pt",
                textIndent: "0pt",
                lineHeight: "9pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              ECS
            </p>
          </td>
          <td
            style={{
              width: "170pt",
              borderBottomStyle: "solid",
              borderBottomWidth: "1pt",
            }}
            bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingLeft: "9pt",
                textIndent: "0pt",
                lineHeight: "9pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              - Electronic Clearing Service
            </p>
          </td>
          <td
            style={{
              width: "105pt",
              borderBottomStyle: "solid",
              borderBottomWidth: "1pt",
            }}
            bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingLeft: "76pt",
                textIndent: "0pt",
                lineHeight: "9pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              ISLIXN
            </p>
          </td>
          <td
            style={{
              width: "238pt",
              borderBottomStyle: "solid",
              borderBottomWidth: "1pt",
            }}
            bgcolor="#FFEBE4">
            <p
              className="s10"
              style={{
                paddingLeft: "4pt",
                textIndent: "0pt",
                lineHeight: "9pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              - Inter sol transactions
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const NomineeDetailsTable = () => {
  return (
    <table
      style={{ borderCollapse: "collapse", width: "100%" }}
      cellSpacing="0">
      <tbody>
        <tr style={{ height: "13pt" }}>
          <td style={{ width: "539pt" }} colSpan="5" bgcolor="#FF6633">
            <p
              className="s7"
              style={{
                paddingTop: "1pt",
                paddingLeft: "201pt",
                paddingRight: "201pt",
                textIndent: "0pt",
                textAlign: "center",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}>
              NOMINEE DETAILS
            </p>
          </td>
        </tr>
        <tr style={{ height: "13pt" }}>
          <td
            style={{
              width: "28pt",
              borderRightStyle: "solid",
              borderRightWidth: "1pt",
              borderRightColor: "#8B7D6B",
            }}
            bgcolor="#BDA081">
            <p
              className="s8"
              style={{
                paddingTop: "2pt",
                textIndent: "0pt",
                textAlign: "center",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
              }}>
              SR.NO.
            </p>
          </td>
          <td
            style={{
              width: "149pt",
              borderLeftStyle: "solid",
              borderLeftWidth: "1pt",
              borderLeftColor: "#8B7D6B",
              borderRightStyle: "solid",
              borderRightWidth: "1pt",
              borderRightColor: "#8B7D6B",
              color: "#fff",
              fontSize: "14px",
            }}
            bgcolor="#BDA081">
            <p
              className="s8"
              style={{
                paddingTop: "2pt",
                paddingLeft: "5pt",
                textIndent: "0pt",
                textAlign: "left",
                fontWeight: "600",
              }}>
              ACCOUNT TYPE
            </p>
          </td>
          <td
            style={{
              width: "110pt",
              borderLeftStyle: "solid",
              borderLeftWidth: "1pt",
              borderLeftColor: "#8B7D6B",
              borderRightStyle: "solid",
              borderRightWidth: "1pt",
              borderRightColor: "#8B7D6B",
            }}
            bgcolor="#BDA081">
            <p
              className="s8"
              style={{
                paddingTop: "2pt",
                paddingLeft: "5pt",
                textIndent: "0pt",
                textAlign: "left",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
              }}>
              ACCOUNT NUMBER
            </p>
          </td>
          <td
            style={{
              width: "252pt",
              borderLeftStyle: "solid",
              borderLeftWidth: "1pt",
              borderLeftColor: "#8B7D6B",
            }}
            colSpan="2"
            bgcolor="#BDA081">
            <p
              className="s8"
              style={{
                paddingLeft: "8pt",
                textIndent: "0pt",
                textAlign: "left",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
              }}>
              NOMINEE NAME(S)
            </p>
          </td>
        </tr>
        <tr style={{ height: "15pt" }}>
          <td style={{ width: "28pt" }} bgcolor="#FFEBE4">
            <p
              className="s6"
              style={{
                paddingTop: "1pt",
                textIndent: "0pt",
                lineHeight: "11pt",
                textAlign: "center",
                fontSize: "14px",
              }}>
              1
            </p>
          </td>
          <td style={{ width: "149pt" }} bgcolor="#FFEBE4">
            <p
              className="s6"
              style={{
                paddingTop: "1pt",
                paddingLeft: "5pt",
                textIndent: "0pt",
                lineHeight: "11pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              SAVINGS ACCOUNT
            </p>
          </td>
          <td style={{ width: "110pt" }} bgcolor="#FFEBE4">
            <p
              className="s6"
              style={{
                paddingTop: "1pt",
                paddingLeft: "5pt",
                textIndent: "0pt",
                lineHeight: "11pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              {accountNumber}
            </p>
          </td>
          <td style={{ width: "13pt" }} bgcolor="#FFEBE4">
            <p
              className="s6"
              style={{
                paddingTop: "1pt",
                textIndent: "0pt",
                lineHeight: "11pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              1)
            </p>
          </td>
          <td style={{ width: "239pt" }} bgcolor="#FFEBE4">
            <p
              className="s6"
              style={{
                paddingTop: "1pt",
                paddingLeft: "5pt",
                textIndent: "0pt",
                lineHeight: "11pt",
                textAlign: "left",
                fontSize: "14px",
              }}>
              DEVIDAS VAISHNAV
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const BranchDetailsTable = () => {
  return (
    <table
      style={{ borderCollapse: "collapse", width: "100%" }}
      cellSpacing="0">
      <tbody>
        <tr style={{ height: "13pt" }}>
          <td style={{ width: "340pt" }} bgcolor="#FF6633">
            <p
              className="s7"
              style={{
                paddingTop: "1pt",
                paddingLeft: "5pt",
                textIndent: "0pt",
                textAlign: "left",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}>
              BASE BRANCH ADDRESS
            </p>
          </td>
          <td style={{ width: "124pt" }} bgcolor="#FF6633">
            <p
              className="s7"
              style={{
                paddingTop: "1pt",
                paddingLeft: "70pt",
                textIndent: "0pt",
                textAlign: "left",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}>
              MICR
            </p>
          </td>
          <td style={{ width: "75pt" }} bgcolor="#FF6633">
            <p
              className="s7"
              style={{
                paddingTop: "1pt",
                paddingLeft: "15pt",
                textIndent: "0pt",
                textAlign: "left",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
              }}>
              IFSC
            </p>
          </td>
        </tr>
        <tr style={{ height: "10pt" }}>
          <td
            style={{
              width: "340pt",
              borderBottomStyle: "solid",
              borderBottomWidth: "1pt",
            }}
            bgcolor="#FFEBE4">
            <p
              className="s6"
              style={{
                paddingLeft: "5pt",
                textIndent: "0pt",
                lineHeight: "9pt",
                textAlign: "left",
              }}>
              SRI BHARANI MARKET, PUSTAK BAZAR, NEEMUCH, 458441
            </p>
          </td>
          <td
            style={{
              width: "124pt",
              borderBottomStyle: "solid",
              borderBottomWidth: "1pt",
            }}
            bgcolor="#FFEBE4">
            <p
              className="s6"
              style={{
                paddingLeft: "70pt",
                textIndent: "0pt",
                lineHeight: "9pt",
                textAlign: "left",
              }}>
              462012014
            </p>
          </td>
          <td
            style={{
              width: "75pt",
              borderBottomStyle: "solid",
              borderBottomWidth: "1pt",
            }}
            bgcolor="#FFEBE4">
            <p
              className="s6"
              style={{
                paddingLeft: "15pt",
                textIndent: "0pt",
                lineHeight: "9pt",
                textAlign: "left",
              }}>
              BARB0NEEMUC
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

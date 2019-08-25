import { timingSafeEqual } from "crypto";
import { underline } from "ansi-colors";

const gradeConvert = marks => {
  let gradePoint = 0;
  if (marks >= 90) {
    gradePoint = 10;
  } else if (marks < 90 && marks >= 80) {
    gradePoint = 9;
  } else if (marks < 80 && marks >= 70) {
    gradePoint = 8;
  } else if (marks < 70 && marks >= 60) {
    gradePoint = 7;
  } else if (marks < 60 && marks >= 50) {
    gradePoint = 6;
  } else if (marks < 50 && marks >= 45) {
    gradePoint = 5;
  } else if (marks < 45 && marks >= 40) {
    gradePoint = 4;
  }
  return parseInt(gradePoint);
};

export default class Index extends React.Component {
  state = {
    curSem: 1,
    cgpa: 0,
    sem: {
      "1": {
        mks: {
          m1: 40,
          m2: 40,
          m3: 40,
          m4: 40,
          m5: 40,
          m6: 40,
          m7: 40,
          m8: 40
        },
        gps: {
          g1: 4,
          g2: 4,
          g3: 4,
          g4: 4,
          g5: 3,
          g6: 3,
          g7: 2,
          g8: 2
        },
        sgpa: 0
      },
      "2": {
        mks: {
          m1: 80,
          m2: 40,
          m3: 40,
          m4: 40,
          m5: 40,
          m6: 40,
          m7: 40,
          m8: 40
        },
        gps: {
          g1: 4,
          g2: 4,
          g3: 4,
          g4: 4,
          g5: 3,
          g6: 3,
          g7: 2,
          g8: 2
        },
        sgpa: 0
      },
      "3": {
        mks: {
          m1: 40,
          m2: 40,
          m3: 40,
          m4: 40,
          m5: 40,
          m6: 40,
          m7: 40,
          m8: 40
        },
        gps: {
          g1: 4,
          g2: 4,
          g3: 4,
          g4: 4,
          g5: 3,
          g6: 3,
          g7: 2,
          g8: 2
        },
        sgpa: 0
      },
      "4": {
        mks: {
          m1: 40,
          m2: 40,
          m3: 40,
          m4: 40,
          m5: 40,
          m6: 40,
          m7: 40,
          m8: 40
        },
        gps: {
          g1: 4,
          g2: 4,
          g3: 4,
          g4: 4,
          g5: 3,
          g6: 3,
          g7: 2,
          g8: 2
        },
        sgpa: 0
      },
      "5": {
        mks: {
          m1: 40,
          m2: 40,
          m3: 40,
          m4: 40,
          m5: 40,
          m6: 40,
          m7: 40,
          m8: 40
        },
        gps: {
          g1: 4,
          g2: 4,
          g3: 4,
          g4: 4,
          g5: 3,
          g6: 3,
          g7: 2,
          g8: 2
        },
        sgpa: 0
      },
      "6": {
        mks: {
          m1: 40,
          m2: 40,
          m3: 40,
          m4: 40,
          m5: 40,
          m6: 40,
          m7: 40,
          m8: 40
        },
        gps: {
          g1: 4,
          g2: 4,
          g3: 4,
          g4: 4,
          g5: 3,
          g6: 3,
          g7: 2,
          g8: 2
        },
        sgpa: 0
      },
      "7": {
        mks: {
          m1: 40,
          m2: 40,
          m3: 40,
          m4: 40,
          m5: 40,
          m6: 40,
          m7: 40,
          m8: 40
        },
        gps: {
          g1: 4,
          g2: 4,
          g3: 4,
          g4: 4,
          g5: 3,
          g6: 3,
          g7: 2,
          g8: 2
        },
        sgpa: 0
      },
      "8": {
        mks: {
          m1: 40,
          m2: 40,
          m3: 40,
          m4: 40,
          m5: 40,
          m6: 40,
          m7: 40,
          m8: 40
        },
        gps: {
          g1: 4,
          g2: 4,
          g3: 4,
          g4: 4,
          g5: 3,
          g6: 3,
          g7: 2,
          g8: 2
        },
        sgpa: 0
      }
    }
  };

  sgpaHandler = values => {
    const { mks, gps } = values;
    const grades = Object.values(gps);
    const marks = Object.values(mks).map(i => gradeConvert(i));
    let array = [grades, marks];
    array = array.reduce((r, a) => a.map((v, i) => (r[i] || []).concat(v)), []);
    array = array.map(i => i[0] * i[1]);
    const sgpa =
      array.reduce((a, b) => a + b, 0) / grades.reduce((a, b) => a + b, 0);
    return Number(sgpa.toFixed(2));
  };

  getSgpa = semester => {
    return this.state.sem[semester].sgpa;
  };

  cgpaHandler = () => {
    const sgpas = Object.values(this.state.sem).map(Obj => Obj.sgpa);
    const cgpa = Number(
      (sgpas.reduce((i, j) => i + j, 0) / sgpas.length).toFixed(2)
    );
    this.setState({ cgpa });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = parseFloat(target.value) || target.value;
    const name = target.name;
    if (name === "sem") {
      this.setState({ curSem: value });
    } else {
      const [s, t, v] = name.split(":");
      this.setState(previousState => ({
        sem: {
          ...previousState.sem,
          [s]: {
            ...previousState.sem[s],
            sgpa: this.sgpaHandler(this.state.sem[this.state.curSem]),
            [t]: {
              ...previousState.sem[s][t],
              [v]: value
            }
          }
        }
      }));
    }
  };

  render() {
    return (
      <div>
        <h1
          style={{
            display: "block",
            textDecoration: "wavy underline",
            lineHeight: "2em"
          }}
        >
          {" "}
          FUCK VTU AMIRITE
        </h1>
        <div id="root">
          <div style={{ fontWeight: "" }}>
            <span> Semester </span>
            <input
              type="Number"
              defaultValue="1"
              onEndedCapture={this.handleInputChange}
              name="sem"
              min="1"
              max="8"
              placeholder="Sem"
              style={{ width: "3em" }}
            />{" "}
            <input
              type="text"
              placeholder="Enter Save Key"
              style={{ width: "8em" }}
            />
            <button>load</button>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "-1px" }}>
              <span> Subj 1 </span>
              <input
                type="Number"
                name={`${this.state.curSem}:mks:m1`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].mks.m1}`}
                style={{ width: "5em" }}
                min="0"
                max="100"
                onChange={this.handleInputChange}
                placeholder="Marks"
              />
            </div>
            <div style={{ marginRight: "-1px" }}>
              <span>Grade Point </span>
              <input
                type="Number"
                size="1"
                name={`${this.state.curSem}:gps:g1`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].gps.g1}`}
                min="2"
                max="4"
                onChange={this.handleInputChange}
                style={{ width: "3em" }}
                placeholder="Grade"
              />
            </div>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "-1px" }}>
              <span> Subj 2 </span>
              <input
                type="Number"
                name={`${this.state.curSem}:mks:m2`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].mks.m2}`}
                style={{ width: "5em" }}
                min="0"
                max="100"
                onChange={this.handleInputChange}
                placeholder="Marks"
              />
            </div>
            <div style={{ marginRight: "-1px" }}>
              <span>Grade Point </span>
              <input
                type="Number"
                size="1"
                name={`${this.state.curSem}:gps:g2`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].gps.g2}`}
                min="2"
                max="4"
                onChange={this.handleInputChange}
                style={{ width: "3em" }}
                placeholder="Grade"
              />
            </div>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "-1px" }}>
              <span> Subj 3 </span>
              <input
                type="Number"
                name={`${this.state.curSem}:mks:m3`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].mks.m3}`}
                style={{ width: "5em" }}
                min="0"
                max="100"
                onChange={this.handleInputChange}
                placeholder="Marks"
              />
            </div>
            <div style={{ marginRight: "-1px" }}>
              <span>Grade Point </span>
              <input
                type="Number"
                size="1"
                name={`${this.state.curSem}:gps:g3`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].gps.g3}`}
                min="2"
                max="4"
                style={{ width: "3em" }}
                onChange={this.handleInputChange}
                placeholder="Grade"
              />
            </div>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "-1px" }}>
              <span> Subj 4 </span>
              <input
                type="Number"
                name={`${this.state.curSem}:mks:m4`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].mks.m4}`}
                style={{ width: "5em" }}
                min="0"
                max="100"
                onChange={this.handleInputChange}
                placeholder="Marks"
              />
            </div>
            <div style={{ marginRight: "-1px" }}>
              <span>Grade Point </span>
              <input
                type="Number"
                size="1"
                name={`${this.state.curSem}:gps:g4`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].gps.g4}`}
                min="2"
                max="4"
                style={{ width: "3em" }}
                onChange={this.handleInputChange}
                placeholder="Grade"
              />
            </div>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "-1px" }}>
              <span> Subj 5 </span>
              <input
                type="Number"
                name={`${this.state.curSem}:mks:m5`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].mks.m5}`}
                style={{ width: "5em" }}
                min="0"
                max="100"
                onChange={this.handleInputChange}
                placeholder="Marks"
              />
            </div>
            <div style={{ marginRight: "-1px" }}>
              <span>Grade Point </span>
              <input
                type="Number"
                size="1"
                name={`${this.state.curSem}:gps:g5`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].gps.g5}`}
                min="2"
                max="4"
                style={{ width: "3em" }}
                onChange={this.handleInputChange}
                placeholder="Grade"
              />
            </div>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "-1px" }}>
              <span> Subj 6 </span>
              <input
                type="Number"
                name={`${this.state.curSem}:mks:m6`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].mks.m6}`}
                style={{ width: "5em" }}
                min="0"
                max="100"
                onChange={this.handleInputChange}
                placeholder="Marks"
              />
            </div>
            <div style={{ marginRight: "-1px" }}>
              <span>Grade Point </span>
              <input
                type="Number"
                size="1"
                name={`${this.state.curSem}:gps:g6`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].gps.g6}`}
                min="2"
                max="4"
                style={{ width: "3em" }}
                onChange={this.handleInputChange}
                placeholder="Grade"
              />
            </div>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "-1px" }}>
              <span> Subj 7 </span>
              <input
                type="Number"
                name={`${this.state.curSem}:mks:m7`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].mks.m7}`}
                style={{ width: "5em" }}
                min="0"
                max="100"
                onChange={this.handleInputChange}
                placeholder="Marks"
              />
            </div>
            <div style={{ marginRight: "-1px" }}>
              <span>Grade Point </span>
              <input
                type="Number"
                size="1"
                name={`${this.state.curSem}:gps:g7`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].gps.g7}`}
                min="2"
                max="4"
                style={{ width: "3em" }}
                onChange={this.handleInputChange}
                placeholder="Grade"
              />
            </div>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "-1px" }}>
              <span> Subj 8 </span>
              <input
                type="Number"
                name={`${this.state.curSem}:mks:m8`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].mks.m8}`}
                style={{ width: "5em" }}
                min="0"
                max="100"
                onChange={this.handleInputChange}
                placeholder="Marks"
              />
            </div>
            <div style={{ marginRight: "-1px" }}>
              <span>Grade Point </span>
              <input
                type="Number"
                size="1"
                name={`${this.state.curSem}:gps:g8`}
                pattern="[1-10]"
                defaultValue={`${this.state.sem[this.state.curSem].gps.g8}`}
                min="2"
                max="4"
                style={{ width: "3em" }}
                onChange={this.handleInputChange}
                placeholder="Grade"
              />
            </div>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "-1px" }}>
              <span>SGPA</span>
              <input
                placeholder="SGPA"
                value={this.getSgpa(this.state.curSem)}
                readOnly={true}
                style={{ width: "4em" }}
              />{" "}
              <input
                type="text"
                placeholder="Enter Save Key"
                style={{ width: "10em" }}
              />
              <button>save</button>
            </div>
          </div>
          <br></br>
          <div>
            <span>CGPA</span>
            <input
              placeholder="CGPA"
              readOnly={true}
              style={{ width: "4em" }}
              value={`${this.state.cgpa}`}
            />
            <button onClick={this.cgpaHandler}>Calculate</button>
          </div>
          {/* <p>{console.log(this.state)}</p> */}
        </div>
        <style jsx>{`
          @media only screen and (max-width: 600px) {
            input {
              padding-top: 0.27em;
              padding-bottom: 0.14em;
            }
          }
          div {
            background-color: #f1fffa;
          }
          input {
            border: 0.4em solid #40e0d0;
            text-align: center;
          }
          input:invalid {
            border: 0.4em solid #e04151;
          }
          span,
          button {
            border: 0.4em solid #41a1e0;
            padding-right: 0.5em;
            padding-left: 0.5em;
          }
        `}</style>
      </div>
    );
  }
}

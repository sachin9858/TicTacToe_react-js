import { useState } from "react";

let i=0;
let visited=[-1,-1,-1,-1,-1,-1,-1,-1,-1];

function App() {
  const [text0,setText0]=useState("");
  const [text1,setText1]=useState("");
  const [text2,setText2]=useState("");
  const [text3,setText3]=useState("");
  const [text4,setText4]=useState("");
  const [text5,setText5]=useState("");
  const [text6,setText6]=useState("");
  const [text7,setText7]=useState("");
  const [text8,setText8]=useState("");

  const [player_x,setPlayer_x]=useState("Player_x");
  const [player_0,setPlayer_0]=useState("Player_0");
  const [win_x,setWin_x]=useState(0);
  const [lose_x,setLose_x]=useState(0);
  const [win_0,setWin_0]=useState(0);
  const [lose_0,setLose_0]=useState(0);

  const initial=()=>{
    setText0(""); setText1(""); setText2("");
    setText3(""); setText4(""); setText5("");
    setText6(""); setText7(""); setText8("");
    visited=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
    i=0;
  }

  const checkForWinner=()=>{
    if(visited[0]!==-1 && visited[0]===visited[1] && visited[1]===visited[2]){return visited[0];}
    if(visited[3]!==-1 && visited[3]===visited[4] && visited[4]===visited[5]){return visited[3];}
    if(visited[6]!==-1 && visited[6]===visited[7] && visited[7]===visited[8]){return visited[6];}

    if(visited[0]!==-1 && visited[0]===visited[3] && visited[3]===visited[6]){return visited[0];}
    if(visited[1]!==-1 && visited[1]===visited[4] && visited[4]===visited[7]){return visited[1];}
    if(visited[2]!==-1 && visited[2]===visited[5] && visited[5]===visited[8]){return visited[2];}

    if(visited[0]!==-1 && visited[0]===visited[4] && visited[4]===visited[8]){return visited[0];}
    if(visited[2]!==-1 && visited[2]===visited[4] && visited[4]===visited[6]){return visited[2];}

  }

  const reset=()=>{
    initial();
    setWin_x(0);
    setLose_x(0);
    setWin_0(0);
    setLose_0(0);
  }

  const hey=(a)=>{
    // if already visited
    if(visited[a]!==-1){return;}

    let value=(i%2===0)?'X':0;
    i++;
    visited[a]=value;
    switch(a){
      case 0:
        setText0(value);
        break;
      case 1:
        setText1(value);
        break;
      case 2:
        setText2(value);
        break;
      case 3:
        setText3(value);
        break;
      case 4:
        setText4(value);
        break;
      case 5:
        setText5(value);
        break;
      case 6:
        setText6(value);
        break;
      case 7:
        setText7(value);
        break;
      case 8:
        setText8(value);
        break;
      default:
        console.log("something went wrong");
    }
    // check if there is any winner
    let winner=checkForWinner();
    if(winner==='X'){
      let w_x=win_x+1;
      let l_0=lose_0+1;
      alert("player X wins");
      setWin_x(w_x);
      setLose_0(l_0);
      initial();
    }
    if(winner===0){
      let w_0=win_0+1;
      let l_x=lose_x+1;
      alert("player X wins");
      setWin_0(w_0);
      setLose_x(l_x);
      initial();
    }

    // if game tie no one is winner and all boxes are filled
    if(i===9){initial();}
  }

  return (
    <div style={{display:'flex'}}>
      <div style={{height:'100%',width:'100%'}}>
        <p style={{color: 'red',fontSize: 60,marginLeft:150,marginTop:5 ,marginBottom:15,}}>TicTacToe</p>
        <input type="text" placeholder="Player X" onChange={setPlayer_x} style={{font:20, textAlign:'center', margin:20,height:30 ,width:'15%',borderRadius:10}}/>
        <input type="text" placeholder="Player 0" onChange={setPlayer_0} style={{font:20, textAlign:'center', margin:20,height:30 ,width:'15%',borderRadius:10}}/>

        <div style={{marginHorizontal: '3%'}}>
          <div style={styles.column}>
            <button style={styles.button} onClick={()=>hey(0)}>{text0}</button>
            <button style={styles.button} onClick={()=>hey(1)}>{text1}</button>
            <button style={styles.button} onClick={()=>hey(2)}>{text2}</button>
          </div>
            <div style={styles.column}>
            <button style={styles.button} onClick={()=>hey(3)}>{text3}</button>
            <button style={styles.button} onClick={()=>hey(4)}>{text4}</button>
            <button style={styles.button} onClick={()=>hey(5)}>{text5}</button>
          </div>
          <div style={styles.column}>
            <button style={styles.button} onClick={()=>hey(6)}>{text6}</button>
            <button style={styles.button} onClick={()=>hey(7)}>{text7}</button>
            <button style={styles.button} onClick={()=>hey(8)}>{text8}</button>
          </div>
        </div>

        <button style={{fontSize: 30, textAlign: 'center',backgroundColor: '#96489c',width: 120,marginTop: 10,marginLeft: 125,borderRadius: 10}} onClick={initial}>Restart</button>
        <button style={{backgroundColor:'#7282ab',width: 120,marginTop: 5,marginLeft: 155,borderRadius: 5,fontSize: 30, textAlign: 'center'}} onClick={reset}>Reset</button>
      </div>

      <div style={{}}>
        <p style={{marginTop: 15,color: '#849456',fontSize: 50,textAlign:'left'}}>ScoreBoard</p>

        <div style={styles.table}>

          <div style={styles.tableRow}>
            <div style={styles.tableCell}>
              <p style={{fontWeight:'bold', textAlign:'center',color:'#a35c22'}}>Player</p>
            </div>
            <div style={styles.tableCell}>
              <p style={{fontWeight:'bold', textAlign:'center',color:'#a35c22'}}>Win</p>
            </div>
            <div style={styles.tableCell}>
              <p style={{fontWeight:'bold', textAlign:'center',color:'#a35c22'}}>Lose</p>
            </div>
          </div>

          <div style={styles.tableRow}>
            <div style={styles.tableCell}>
              <p>{player_x}</p>
            </div>
            <div style={styles.tableCell}>
              <p>{win_x}</p>
            </div>
            <div style={styles.tableCell}>
              <p>{lose_x}</p>
            </div>
          </div>

          <div style={styles.tableRow}>
            <div style={styles.tableCell}>
              <p>{player_0}</p>
            </div>
            <div style={styles.tableCell}>
              <p>{win_0}</p>
            </div>
            <div style={styles.tableCell}>
              <p>{lose_0}</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

const styles = {
  column:{
    display:'flex',
    flexDirection:'row',
  },
  button: {
    height: 150,
    width:'15%',
    marginLeft:'0.5%',
    marginTop:'0.5%',
    backgroundColor: '#CCCCCC',
    borderRadius:20,
    color:'#333333',
    fontSize:100,
    fontWeight:'bold',
    textAlign:'center'
  },
  table: {
    flex:1,
    margin:5,
    border:'1px solid #000'
  },
  tableRow: {
    display:'flex',
    flexDirection: 'row',
    //border:'1px solid #000',
  },
  tableCell: {
    //border:'1px solid #000',
    padding: 15,
  },
};
export default App;

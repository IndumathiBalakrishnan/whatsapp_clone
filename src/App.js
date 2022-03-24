//import logo from './logo.svg';
import './App.css';
import image1 from './image1.jpeg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './image7.jpg'
import attachment from './attachment.png'




import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { EllipsisOutlined } from '@ant-design/icons';
import Message from './Message.jpg';
import { SearchOutlined } from '@ant-design/icons';
//import './App.css';
//import image11 from './image11.png'
function App() {
  return (
    <div class="container">
      <div class="subcontainer"></div>
      <div class="container1">
        <div class="leftside-content">

          <div class="leftside">
            <div class="firstuser-icon">
              <UserOutlined style={{
                color: "gray", fontSize: "30px",
                border: "1px solid gray",
                borderRadius: "50%", position: "relative", top: "15px", left: "5px"
              }} />
            </div>
            <div class="msg-ellipse">
              <img src={Message} class="message" />   <EllipsisOutlined style={{ fontSize: "30px", color: "gray", transform: "rotate(90deg)", paddingLeft: "25px" }} />
            </div>
          </div>
          <div class="searchicon">
            <SearchOutlined style={{
              fontSize: "22px", color: "black", position: "relative",
              left: "28px",
              top: "10px",
            }} />
            <p class="searchicon-text">Search or start new chat</p>

          </div>

          <div class="scroll">
            <div class="imgdiv" onclick>
              <img src={image1} class="image" />
              <div class="imgcenter-text">
                <h4>Vidhursan</h4>
                <p style={{ color: "#80d4a3" }}>typing...</p>
              </div>
              <div class="imgrightside-text">
                <p>02:01</p>
              </div>
            </div>
            <div class="imgdiv">
              <img src={image2} class="image" />
              <div class="imgcenter-text">
                <h4>Abi</h4>
                <p>How to learn HTML5</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>yesterday</p>
              </div>
            </div>
            <div class="imgdiv">
              <img src={image3} class="image" />
              <div class="imgcenter-text">
                <h4>Nathiya</h4>
                <p>How to learn CSS</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>yesterday</p>
              </div>
            </div>
            <div class="imgdiv">
              <img src={image4} class="image" />
              <div class="imgcenter-text">
                <h4>Sathish</h4>
                <p>How to learn Javascript</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>yesterday</p>
              </div>
            </div>
            <div class="imgdiv">
              <img src={image5} class="image" />
              <div class="imgcenter-text">
                <h4>Sindhu</h4>
                <p>How to learn React</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>Saturday</p>
              </div>
            </div>
            <div class="imgdiv">
              <img src={image6} class="image" />
              <div class="imgcenter-text">
                <h4>Sudha</h4>
                <p>How to learn ReactNative</p>
              </div>
              <div class="imgrightside-text">
                <p style={{ color: "gray" }}>Sunday</p>
              </div>
            </div>
            <div class="imgdiv">
              <img src={image7} class="image" />
              <div class="imgcenter-text">
                <h4>Saraswathi</h4>
                <p>Hiii</p>
              </div>

            </div>
            <div class="imgdiv">
              <img src={image1} class="image" />
              <div class="imgcenter-text">
                <h4>Indhu</h4>
                <p>Hello world</p>
              </div>

            </div>
            <div class="sidediv">

            <div class="sidedicone"></div>

          </div>




            <div class="rightside">
              <div class="imgdiv-first">
                <img src={image1} class="imagfirst" />
                <div class="imgcenterfirst-text">
                  <h4>Vidhursan</h4>
                  <p style={{ color: "gray" }}>typing...</p>
                </div>
                <div class="leftside-icon">
                  <img src={attachment} class="attach-icon" />  <EllipsisOutlined style={{ fontSize: "30px", color: "gray", transform: "rotate(90deg)", paddingLeft: "25px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>









  );
}

export default App;

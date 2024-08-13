import { useState } from "react";
import "./App.css";

function App() {
  const [rot, setRot] = useState(false);
  return (
    <main>
      <div className={`nav ${rot ? "navshow" : ""}`}>
        <ul>
          <li className="li1">
            <i className="fa fa-home home"></i>
            HOME
          </li>
          <li className="li2">
            <i class="fa fa-user-o user"></i>ABOUT
          </li>{" "}
          <li className="li3">
            <i class="fa fa-envelope-o home"></i>CONTACT
          </li>
        </ul>
      </div>
      <div className={`container ${rot ? "rotate15" : ""}`}>
        <div
          className={`nav-rotate ${rot ? "rotate90" : ""}`}
          onClick={() => setRot(!rot)}
        >
          <div>1</div>
          <div></div>
          <div>❌</div>
          <div>
            <div className="berger">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="article">
          <h2>Amazing Article</h2>
          <p className="subhead">Florin Pop</p>
          <p className="desc1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia in ratione dolores cupiditate, maxime aliquid impedit dolorem
            nam dolor omnis atque fuga labore modi veritatis porro laborum
            minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod
            voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa.
            Corrupti, laudantium iure aliquam rerum sint nam quas dolor
            dignissimos in error placeat quae temporibus minus optio eum soluta
            cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
            consequuntur perferendis consequatur nobis exercitationem molestias
            fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
          </p>
          <h5>My Dog</h5>
          <img
            src="1.avif"
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
            temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore
            autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;

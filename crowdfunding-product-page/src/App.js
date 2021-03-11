import react from "react";
import Logo from "./images/logo.svg";
import logoMastercraft from "./images/logo-mastercraft.svg";
import closeModal from "./images/icon-close-modal.svg";
import checkIcon from "./images/icon-check.svg";
import bookMark from "./images/icon-bookmark.svg";

const App = () => {
  const [fund, setFund] = react.useState({
    goal: 100000,
    current: 89914,
    backers: 5007,
  });

  const [selectionModal, setSelectionModal] = react.useState(false);
  const [amount, setAmount] = react.useState("");
  const [mobileNav, setMobileNav] = react.useState(false);
  const [thankModal, setThankModal] = react.useState(false);
  const [bookmark, setBookMark] = react.useState(false);

  const progress = ((fund.current / fund.goal) * 100).toFixed();

  const [products, setProducts] = react.useState([
    {
      id: 0,
      name: "Pledge with no reward",
      price: 0,
      checked: false,
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      left: 0,
    },
    {
      id: 1,
      name: "Bamboo Stand",
      price: 25,
      checked: false,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      left: 101,
    },
    {
      id: 2,
      name: "Black Edition Stand",
      price: 75,
      checked: true,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      left: 64,
    },
    {
      id: 3,
      name: "Mahogany Special Edition",
      price: 200,
      checked: false,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      left: 0,
    },
  ]);

  function handleSelection(e) {
    setSelectionModal(true);
    setProducts((prev) => {
      const prevState = [...prev];
      prevState.forEach((product) => (product.checked = false));
      prevState[e.target.dataset.id].checked = true;
      return prevState;
    });
  }

  function handleNav() {
    setMobileNav((prev) => !prev);
  }

  function handleSupport(e) {
    setFund((prev) => {
      const prevState = { ...prev };
      prevState.current += +amount;
      prevState.backers -= 1;
      return prevState;
    });
    setAmount("");
    setSelectionModal(false);
    setThankModal(true);
    e.preventDefault();
  }

  react.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [selectionModal, thankModal]);

  react.useEffect(() => {
    const navLinks = document.querySelectorAll(".mobile-nav a");
    navLinks.forEach((link) =>
      link.addEventListener("click", () => setMobileNav((prev) => !prev))
    );
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-bg">
          <div className="container">
            <div>
              <img src={Logo} alt="crowdfund" />
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Discover</a>
                </li>
                <li>
                  <a href="#">Get Started</a>
                </li>
              </ul>
            </nav>
            <div
              className={"burger " + (mobileNav && "active")}
              onClick={() => handleNav()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <section className="project">
        <div className="container">
          <div className="project-back">
            <img src={logoMastercraft} alt="mastercraft" />
            <h1 className="text-center">Mastercraft Bamboo Monitor Riser</h1>
            <h4 className="text-center">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </h4>
            <div>
              <button
                className="btn btn-primary"
                data-id="0"
                onClick={(e) => handleSelection(e)}
              >
                Back this project
              </button>
              <button
                className={"btn btn-secondary desk " + (bookmark && "active")}
                onClick={() => setBookMark((prev) => !prev)}
              >
                {bookmark ? "Bookmarked" : "Bookmark"}
              </button>
              <button className="btn mobile">
                <img src={bookMark} alt="bookmark" />
              </button>
            </div>
          </div>
          <div className="project-fund">
            <div>
              <span className="amount">
                {"$" + fund.current.toLocaleString("en-US")}
              </span>
              <p>of $100,000 backed</p>
            </div>
            <div>
              <span className="amount">
                {fund.backers.toLocaleString("en-US")}
              </span>
              <p>total backers</p>
            </div>
            <div>
              <span className="amount">56</span>
              <p>days left</p>
            </div>
            <progress value={progress} max="100"></progress>
          </div>
          <div className="project-about">
            <h2>About this project</h2>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p>
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
            {products.map((product, index) =>
              index === 0 ? null : (
                <div
                  className={"reward " + (product.left === 0 ? "disabled" : "")}
                  key={product.id}
                >
                  <header>
                    <h3>{product.name}</h3>
                    <span className="support">
                      Pledge ${product.price} or more
                    </span>
                  </header>
                  <div className="reward-body">
                    <p>{product.description}</p>
                    <div className="selection">
                      <div className="left">
                        <span className="amount">{product.left}</span>
                        <p>left</p>
                      </div>
                      <button
                        className="btn btn-primary"
                        data-id={product.id}
                        onClick={(e) => handleSelection(e)}
                      >
                        Select Reward
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className={"selection-modal " + (selectionModal ? "active" : "")}>
          <div className="container">
            <div>
              <img
                src={closeModal}
                alt="close"
                onClick={() => setSelectionModal(false)}
              />
              <h2>Back this project</h2>
              <p>
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </p>
              <form onSubmit={(e) => handleSupport(e)}>
                {products.map((product, index) =>
                  index === 0 ? (
                    <fieldset
                      key={product.id}
                      className={product.checked ? "active" : ""}
                    >
                      <div
                        data-id={product.id}
                        onClick={(e) => handleSelection(e)}
                      >
                        <div>
                          <input
                            type="radio"
                            name="product"
                            checked={product.checked}
                            data-id={product.id}
                            onChange={(e) => handleSelection(e)}
                          />
                        </div>
                        <header>
                          <h3>{product.name}</h3>
                          <span className="support">
                            Pledge ${product.price} or more
                          </span>
                        </header>
                        <div className="product-description">
                          <header>
                            <h3>{product.name}</h3>
                          </header>
                          <p>{product.description}</p>
                        </div>
                      </div>
                      <div className="pledge">
                        <p>Enter your pledge</p>
                        <div className="cta">
                          <input
                            type="number"
                            placeholder={"$" + product.price}
                            disabled={!product.checked}
                            min={product.price}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                          <button className="btn btn-primary" type="submit">
                            Continue
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  ) : (
                    <fieldset
                      key={product.id}
                      className={product.checked ? "active" : ""}
                      disabled={product.left === 0 ? true : false}
                    >
                      <div
                        data-id={product.id}
                        onClick={(e) => handleSelection(e)}
                      >
                        <div>
                          <input
                            type="radio"
                            name="product"
                            checked={product.checked}
                            data-id={product.id}
                            onChange={(e) => handleSelection(e)}
                          />
                        </div>
                        <header>
                          <h3>{product.name}</h3>
                          <span className="support">
                            Pledge ${product.price} or more
                          </span>
                        </header>
                        <div className="product-description">
                          <header>
                            <h3>{product.name}</h3>
                            <span className="support">
                              Pledge ${product.price} or more
                            </span>
                            <div className="left">
                              <span className="amount">{product.left}</span>
                              <p>left</p>
                            </div>
                          </header>
                          <p>{product.description}</p>
                          <div className="left">
                            <span className="amount">{product.left}</span>
                            <p>left</p>
                          </div>
                        </div>
                      </div>
                      <div className="pledge">
                        <p>Enter your pledge</p>
                        <div className="cta">
                          <input
                            type="number"
                            placeholder={"$" + product.price}
                            min={product.price}
                            disabled={!product.checked}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                          <button
                            className="btn btn-primary"
                            type="submit"
                            name={product.id}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  )
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <nav className={"mobile-nav " + (mobileNav && "active")}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
        </ul>
      </nav>
      <div className={"thanks-modal " + (thankModal ? "active" : "")}>
        <div className="thanks-body">
          <img src={checkIcon} alt="" />
          <h3 className="text-center">Thanks for your support!</h3>
          <p className="text-center">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setThankModal(false)}
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

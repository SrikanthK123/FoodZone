import React from "react";
import { animate, motion } from "framer-motion";

const SingleRecipe = () => {

  return (
    <motion.div
      className="HomePage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="SingleVideoBox">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/2Ab53W6hKPU?autoplay=5&mute=1"
            style={{
              width: "350px",
              height: "300px",
              marginTop: "40px",
              border: "2px solid white",
              borderRadius: "15px",
            }}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="container">
        <h2
          style={{
            borderBottom: "2px solid white",
            padding: "10px",
            fontFamily: "monospace",
            color: "white",
          }}
        >
          <span style={{color:'#ffb5b5'}}>Veg Biryani</span> Process
        </h2>
        <div>
          <div class="bd-example-snippet bd-code-snippet">
            <div class="bd-example m-0 border-0">
              <nav style={{ display: "flex", justifyContent: "center" }}>
                <div
                  class="nav nav-tabs mb-3 gap-3 my-4"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    class="nav-link active"
                    id="nav-Instruction-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                    style={{ backgroundColor: "#a2a8d3" }}
                  >
                    Instruction
                  </button>
                  <button
                    class="nav-link"
                    id="nav-Ingredients-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                    tabindex="-1"
                    style={{ backgroundColor: "#a2a8d3" }}
                  >
                    Ingredients
                  </button>
                  <button
                    class="nav-link"
                    id="nav-Tips-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                    tabindex="-1"
                    style={{ backgroundColor: "#a2a8d3" }}
                  >
                    Tips{" "}
                  </button>
                </div>
              </nav>
              <div
                class="tab-content"
                id="nav-tabContent"
                style={{ minHeight: "35vh" }}
              >
                <div
                  class="tab-pane fade show active text-white lead"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-Instruction-tab"
                >
                  <div
                    className="ImageInstruction my-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://3.bp.blogspot.com/-npb6hh2MeLY/V0GqO52lZzI/AAAAAAAAA0E/SYsTDWsi8KMdvQ7ed2Uq2ILWHMl4NE8bgCKgB/s1600/biryani.gif"
                      style={{
                        width: "300px",
                        height: "300px",
                        marginTop: "40px",
                        border: "2px solid white",
                        borderRadius: "15px",
                      }}
                      alt="gif"
                    />
                  </div>
                  <ol>
                    <li>
                      Soak Basmati Rice: Wash basmati rice thoroughly and soak
                      it in water for about 30 minutes.
                    </li>
                    <li>
                      Boil Rice: In a large pot, bring water to a boil. Add
                      salt, whole spices, and soaked basmati rice. Cook the rice
                      until it is 70-80% cooked. It should still have a slight
                      bite to it. Drain the water and set aside.
                    </li>
                    <li>
                      Biryani Masala: Sauté Onions - In a separate pan, heat oil
                      or ghee. Add sliced onions and sauté until golden brown.
                      Add Aromatics - Add ginger-garlic paste and sauté until
                      the raw smell disappears. Add green chilies and chopped
                      tomatoes. Cook until tomatoes are soft.
                    </li>
                  </ol>
                </div>
                <div
                  class="tab-pane fade text-white lead"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-Ingredients-tab"
                >
                  <div
                    className="ImageInstruction my-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      style={{
                        width: "300px",
                        height: "300px",
                        marginTop: "40px",
                        border: "2px solid white",
                        borderRadius: "15px",
                      }}
                      alt="gif"
                    />
                  </div>
                  <ul>
                    <li>Basmati rice</li>
                    <li>Water for soaking and cooking</li>
                    <li>Salt</li>
                    <li>
                      Whole spices (bay leaves, cinnamon, cardamom, cloves)
                    </li>
                    <li>Cooking oil or ghee</li>
                    <li>Onions (sliced)</li>
                    <li>Ginger-garlic paste</li>
                    <li>Tomatoes (chopped)</li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade text-white lead"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-Tips-tab"
                >
                  <div
                    className="ImageInstruction my-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1552590635-27c2c2128abf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D"
                      style={{
                        width: "300px",
                        height: "300px",
                        marginTop: "40px",
                        border: "2px solid white",
                        borderRadius: "15px",
                      }}
                      alt="gif"
                    />
                  </div>
                  <p>Here are some tips and tricks to enhance your biryani:</p>
                  <ul>
                    <li>Use high-quality Basmati rice for the best results.</li>
                    <li>
                      Adjust spice levels according to your taste preferences.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleRecipe;

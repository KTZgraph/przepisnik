/*
How To Create Add Tags Input Using React.js | React Hooks & CSS
https://www.youtube.com/watch?v=l8Jd7Ub4yJE
*/
import { useState } from "react";
import "./InputWithTags.scss";

const InputWithTags = () => {
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    // jak przycisk to nie enter to olewam - zwracam
    if (e.key !== "Enter") return;
    const value = e.target.value;
    // jeśli user dodał tylko biały znak to nic nie robimy
    if (!value.trim()) return;

    // dodawanie tagów + spread operator żeby poprzednie trzymać
    setTags([...tags, value]);

    // czyszczenie inputu po kliknieciu enter
    e.target.value = "";
  }

  function removeTag(index) {
    // usuwanie tagu z listy; filtrowanie żeby się pobyć wybrane
    setTags(tags.filter((el, i) => i !== index));
  }

  return (
    <div className="input-with-tags">
      <h2>Enter some text...</h2>
      <div className="tags-input-container">
        {/* <div className="tag-item">
          <span className="text">hello</span>
          <span className="close">&times;</span>
        </div> */}
        {/* mapowanie tagów ze stanu */}
        {tags.map((tag, index) => (
          <div className="tag-item" key={index}>
            <span className="text">{tag}</span>
            <span className="close" onClick={() => removeTag(index)}>
              &times;
            </span>
          </div>
        ))}

        {/* input */}
        <input
          onKeyDown={handleKeyDown}
          type="text"
          className="tags-input"
          placeholder="Type something"
        />
      </div>
    </div>
  );
};

export default InputWithTags;

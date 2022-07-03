import React from "react";


function TextForm({ handleSubmit, handleCancel, submitLabel}) {

    const [text, setText] = useState("");
    const [cancelButton, setCancelButton] = useState(false); //after inital value it will be true
    const textDisabled = text.length == 0;

    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit(text);
        setText("")
    }

  return (
    <>
      <form onSubmit={onSubmit}>
        <textarea className="comment-form" value={text} onChange={(e) => setText(e.target.value)}/>
        <button className="form-btn" disabled={textDisabled}>{submitLabel}</button>
        {/* test button */}
        {cancelButton && (<button type="button" className="comment-btn" onClick={handleCancel}>Cancel</button>)}
      </form>
    </>
  );
}

export default TextForm;

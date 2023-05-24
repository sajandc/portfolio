function Title() {
  const onClick = () => {
    const element = document.getElementById("content");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="title">
      <div id="hi" className="hi">
        Hi, my name is
      </div>
      <div id="name" className="name">
        Sajan Chouhan
      </div>
      <div id="description" className="description">
        <p className="line-1">I build the things</p>
        <p className="line-2"> for the Web...</p>
      </div>
      <span
        onClick={onClick}
        class="material-symbols-outlined scroll-down font-48"
      >
        keyboard_double_arrow_down
      </span>
    </div>
  );
}

export default Title;

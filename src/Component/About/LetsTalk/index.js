import List from "../../../CustomComponent/List";
export default function LetsTalk() {
  return (
    <div className="lets-talk">
      <h1 className="talk-title">Let's have a word</h1>
      <h1 className="mail-id">
        <a href="mailto:sajan.d.chouhan@gmail.com">hi@sajan.co.in</a>
      </h1>
      <hr />
      <div className="social-media">
        <List />
      </div>
    </div>
  );
}

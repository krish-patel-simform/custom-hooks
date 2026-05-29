import { useClipboard } from "../hooks/useClipboard";
import Button from "../Component/Button/Button";
import { withDemo } from "../HOC/withDemo";

function DemoOfUseClipboard() {
  const { copied, copy } = useClipboard();

  function handleCopyBtnClick() {
    copy("React Hook");
  }

  return (
    <div className="">
      <p>A Copied Text : {copied}</p>
      <Button title="Copy" mode="Primary" onClick={handleCopyBtnClick} />
      <p>Here some text to copy</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id eos
        ducimus ratione accusamus non odit earum officiis obcaecati. Rem ut
        magnam animi neque quod voluptatem pariatur perferendis cum!
        Necessitatibus.
      </p>
    </div>
  );
}

const WithDemoUseClipboard = withDemo(DemoOfUseClipboard);

export default function UseClipboardPage() {
  return <WithDemoUseClipboard title="Use Clipboard" />;
}

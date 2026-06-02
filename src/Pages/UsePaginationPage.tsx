import { withDemo } from "../HOC/withDemo";
import { usePagination } from "../hooks/usePagination";
import Button from "../Component/Button/Button";

function DemeOfUsePagination() {
  const users = ["A", "B", "C", "D", "E"];
  const { currentItem, prevPage, nextPage, canPrev, canNext } = usePagination(
    users,
    2,
  );

  return (
    <>
      <div>
        {currentItem.map((data, index) => {
          return <p key={index}>{data}</p>;
        })}
      </div>
      <div className="flex gap-4">
        <Button
          mode={canPrev ? "Primary" : "Secondary"}
          title="Prev Page"
          onClick={prevPage}
          disabled={!canPrev}
        />
        <p>current Item</p>
        <Button
          mode={canNext ? "Primary" : "Secondary"}
          title="Next Page"
          onClick={nextPage}
          disabled={!canNext}
        />
      </div>
    </>
  );
}

const WithDemoUsePagination = withDemo(DemeOfUsePagination);

export default function UsePaginationPage() {
  return <WithDemoUsePagination title="Use Pagination" />;
}

export default function Breadcrumb({ pageName }) {
  return (
    <div className="breadcrumb flex justify">
      <div className="inner-breadcrumb">Home › {pageName}</div>
    </div>
  );
}

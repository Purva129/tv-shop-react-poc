const CustomBadge = (props) => {
  return (
    <span className="badge bg-success" style={{ fontSize: "13px" }}>
      ${props.cost}
    </span>
  );
};

export default CustomBadge;

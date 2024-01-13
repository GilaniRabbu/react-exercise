const FormSubmit = () => {
  const PostFormData = (event) => {
    event.preventDefault();
    alert("Event Triggered");
  };
  return (
    <div>
      <form onSubmit={PostFormData}>
        <input type="text" placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSubmit;

export default function Signup2() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitting!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input />
      <button type="submit">Send2</button>
    </form>
  );
}
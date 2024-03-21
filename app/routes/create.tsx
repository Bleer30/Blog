export default function create() {
  return (
    <form method="POST">
      <div>
        <h3>Title</h3>
        <input type="text" id="title" className="border bg-transparent"></input>
      </div>

      <div>
        <h3>Content</h3>
        <input
          type="text"
          id="content"
          className="border bg-transparent"
        ></input>
      </div>

      <button type="submit" className=" bg-yellow-600  border">
        Add new post
      </button>
    </form>
  );
}

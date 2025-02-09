function NoBookmarks() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-white text-6xl">
        NO BOOKMARKS YET...add some movie so you can see it here!
      </h1>
      <Link href="/" className="text-blue-300 text-4xl">
        Click here to surf through movies...
      </Link>
    </div>
  );
}

export default NoBookmarks;

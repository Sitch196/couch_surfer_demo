const Loading = () => (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
    <div className="flex items-center animate-spin">
      <div className="mr-2 w-5 h-5 bg-blue-600 rounded-full"></div>
      <div className="mr-2 w-5 h-5 bg-green-500 rounded-full"></div>
      <div className="w-5 h-5 bg-red-500 rounded-full"></div>
    </div>
  </div>
);

export default Loading;

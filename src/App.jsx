import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 bg-black bg-opacity-50">
        <Todo />
      </div>
    </div>
  );
}

export default App;
import Counter from "@/components/counter/Counter";

const Home=()=> {
  return (
    <div className=" flex flex-col justify-center items-center gap-10">
      <h1 className=" text-4xl font-bold text-center mt-40">Welcome to nextJs website</h1>
   <Counter/>
    </div>
  );
}

export default Home

function Body(){
    return(
    <div className="Body bg-gray-100 items-center justify-start p-4">
        <div className="pfp items-center gap-0 flex w-full border-black mt-4">
          <img src="https://i.pinimg.com/280x280_RS/12/13/c0/1213c0ee60ba8295c39e624b47908366.jpg" 
              className="w-72 h-72 object-cover rounded-full border-4 ml-10 border-black hover:scale-90  hover:shadow-xl transition-transform duration-300"></img>
          <h1 className="font-bold text-black text-7xl cursor-pointer hover:text-indigo-700 ml-12 ">
            Hello, I'm Anshul Singh!
          </h1> 
        </div>
        <div className="profile-data">
          <p className="data items-center mt-4 text-gray-700 text-lg font-semibold px-4">
          Welcome to my Po  rtfolio! I'm a passionate Full-Stack Developer who thrives on solving complex challenges and building efficient, scalable, and user-friendly web applications. I love experimenting with new technologies and aim to deliver clean, maintainable code that makes a meaningful impact.
          </p>
        </div>
        </div>      
    );
};


export default Body;
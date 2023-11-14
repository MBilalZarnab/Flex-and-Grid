import Link from "next/link";

export default function Home() {
  return (
  <div> <div className="flex gam-6 fllex-wrap justify-between">
  <div className="bg-green-200 h-[200px] w-[200px]" > Flexbox 1</div>
  <div className="bg-green-200 h-[200px] w-[200px]" > Flexbox 2</div>
  <div className="bg-green-200 h-[200px] w-[200px]" > Flexbox 3</div>
</div>


     


<div className="container grid sm:grid-cols-2  bg-purple-400 justify-center">
  <div className="component-header sm:col-start-1 sm:col-end-3 bg-white-600 rounded full mx- basis-1/5">
    <h1> Join our community </h1> 
    <h3>30-day, hassle-free money back guarantee </h3>
    <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
  </div> 
  <div className="subscription bg-blue-200 rounded full mg-4" >
    <h3>Monthly Subscription </h3>
    <span className="price">$29</span><span className="per">per month</span>
    <p>Full access for less than $1 a day </p>
    <a href="#" id="sign-up">Sign Up</a>
  </div>
  <div className="why bg-blue-400 rounded full mg-5">
    <h3>Why Us</h3>
    <ul>
      <li>Tutorials by industry experts</li>

      <li>Peer & expert code review</li>

      <li>Coding exercises</li>

      <li>Access to our GitHub repos</li>

      <li>Community forum</li>
      
      <li>Flashcard decks</li>

      <li>New videos every week</li>
    </ul>
  </div>
</div>

<div className="container flex justify-around bg-white-500 rounded full">
  <div className="team-profile">
    <img src=" https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1699980024~exp=1699980624~hmac=6236dbcfd87f4087c060c7628ea7910cd2361822a1402406eec683e6a78c7b04" className="team-img" />
    <h3>Muhammad Rauf</h3>
    <p>Founder and CEO</p>
  </div>
  <div className="team-profile">
    <img src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg
   " className="team-img" />
    <h3>Muhammad Bilal</h3>
    <p>Web Developer</p>
  </div>
  <div className="team-profile">
    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1159411796.1699979842&semt=sph" className="team-img" />
    <h3>Muhammad Ahmed</h3>
    <p>Marketing Specialist</p>
  </div>
  <div className="team-profile">
    <img src="https://img.freepik.com/premium-vector/mans-face-circle_410516-77142.jpg" className="team-img" />
    <h3>Habial Fuar</h3>
    <p>UX Designer</p>
  </div>
</div>


   
     
     </div>
 
    
     
     
     
     )
}
    
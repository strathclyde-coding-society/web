import Member from '../components/Member';
import Nav from '../components/Nav';
import Background from '../components/Background';

const members = [
    {name: "Mohammed Alosh", role: "President & Founder", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "https://github.com/k9mil", linkedin: "https://www.linkedin.com/in/kamilzak00/", twitter: "https://twitter.com/alsokamil"},
    {name: "Ayushi Badiyani", role: "Vice President", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "https://github.com/k9mil", linkedin: "https://www.linkedin.com/in/kamilzak00/", twitter: "https://twitter.com/alsokamil"},
    {name: "Kamil Zak", role: "Technical Officer", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "https://github.com/k9mil", linkedin: "https://www.linkedin.com/in/kamilzak00/", twitter: "https://twitter.com/alsokamil"},
    {name: "Shelly Master", role: "Treasurer", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "https://github.com/k9mil", linkedin: "https://www.linkedin.com/in/kamilzak00/", twitter: "https://twitter.com/alsokamil"},
    {name: "George O'Brien", role: "Internal Operations", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "https://github.com/k9mil", linkedin: "https://www.linkedin.com/in/kamilzak00/", twitter: "https://twitter.com/alsokamil"},
    {name: "Charles Watson", role: "Events Coordinator", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "https://github.com/k9mil", linkedin: "https://www.linkedin.com/in/kamilzak00/", twitter: "https://twitter.com/alsokamil"},
    {name: "Gio Matonti", role: "Social Coordinator", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "https://github.com/k9mil", linkedin: "https://www.linkedin.com/in/kamilzak00/", twitter: "https://twitter.com/alsokamil"},
]

function Team() {
    return (
      <div className="bg-black w-screen h-screen overflow-x-hidden flex flex-col items-center space-y-2 text-gray-400">
          <Nav />
          <div className="max-w-2xl flex flex-col justify-center space-y-16">
            <Background />
              <div className="flex flex-col justify-center space-y-10 z-10">
                  <div className="flex flex-col items-center">
                      <div className="text-5xl leading-normal font-bold text-gray-50">
                          <h1>
                              Lorem ipsum dolor sit amet, consectetur adipiscing.
                          </h1>
                      </div>
                  </div>
                  <div className="flex flex-col justify-center">
                      <div className="space-y-4 leading-relaxed">
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt dui at dui rutrum, nec posuere leo bibendum. Suspendisse et imperdiet neque. Aenean sit amet dui sed enim consequat suscipit at in augue. Cras tempor nisl vitae urna auctor, non faucibus justo pulvinar. Morbi a lorem viverra, accumsan turpis et, fringilla justo. Donec quis mollis ante, sed tincidunt nulla. Etiam semper suscipit felis, sed congue metus porta ac.
                          </p>
                          <p>
                              Cras scelerisque pharetra arcu, auctor lacinia velit vehicula a. Suspendisse fringilla mi ligula, et vestibulum elit rutrum ut. Quisque lobortis volutpat enim quis mattis. Fusce vel blandit velit. Mauris ut posuere augue, et tincidunt risus. Donec non orci nec diam hendrerit maximus. Aliquam lobortis id felis id rutrum.
                          </p>
                      </div>
                  </div>
                  <hr className="my-32 border-purple-000 opacity-20 border-1" />
                  <div className="items-start">
                      <div className="text-2xl font-semibold mb-10">
                          <h2 className="text-gray-50">
                              Committee Members
                          </h2>
                      </div>
                      <div className="grid grid-cols-3 gap-x-5 gap-y-10 mb-10 text-gray-200">
                          <Member members={members[0]}/>
                          <Member members={members[1]}/>
                          <Member members={members[2]}/>
                          <Member members={members[3]}/>
                          <Member members={members[4]}/>
                          <Member members={members[5]}/>
                          <Member members={members[6]}/>
                      </div>
                  </div>
              </div>
          </div>  
      </div>
    );
  }
  
  export default Team;
  
import './App.css'
import sam from './assets/sam5.png'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SideBySide from './components/SideBySide'
import map from './assets/map.mp4'
import hi_there from './assets/hi_there.png'
import wow from './assets/wow.png'
import f1 from './assets/f1.png'
import mira from './assets/mira.png'
import s1 from './assets/ai.png'
import s2 from './assets/gpt.png'
import woohoo from './assets/woohoo.png'

function App() {

  return (
    <div style={{position:'absolute', top:'0', left:'0'}}>
     <Header />

     <Navbar />

     <div style={{height:'7vh'}} />

     <SideBySide 
     lcolor='rgb(34, 160, 148)'
     rcolor='#F4B324'
     right={
     <div style={{display:'flex', justifyContent:'center'}}>
        <img src={sam} style={{width:'60vh', alignItems:'center', padding:'12vh'}} />
        <img id='s1' src={s1} style={{position:'absolute', height:'13vw', width:'13vw', top:'55vh', left:'8vw'}}/>
        <img id='s2' src={s2} style={{position:'absolute', height:'13vw', width:'13vw', top:'13vh', left:'27vw'}}/>
     </div>
     }
     left={
      <div style={{display:'flex', justifyContent:'center', marginTop:'14vh'}}>
        <div>
          <div style={{fontSize:'6vh', fontWeight:'510', textAlign:'center', width:'30vw'}}>
            Sam Aultman:
          </div>
          <br />
          <div style={{fontSize:'4vh', textAlign:'center', width:'30vw'}}>
            “The original ChatGPT showed a hint of what was possible with language interfaces; this new thing feels viscerally different. It is fast, smart, fun, natural, and helpful.” 
          </div>
          <br />
          <br />
          <div className='container' style={{display:'flex', justifyContent:'center'}}>
            <span id='b3' style={{fontSize:'2.8vh', paddingTop:'1vw', paddingBottom:'1vw', paddingLeft:'3vw', paddingRight:'3vw', backgroundColor:'#F4B324', color:'white', borderRadius:'10px', cursor:'pointer', position:'absolute', border:'2px solid black'}}>Lets Go</span>
            <span id='b2' style={{fontSize:'2.8vh', paddingTop:'1vw', paddingBottom:'1vw', paddingLeft:'3vw', paddingRight:'3vw', backgroundColor:'#FF90E7', color:'white', borderRadius:'10px', cursor:'pointer', position:'absolute', border:'2px solid black'}}>Lets Go</span>
            <span id='b1' style={{fontSize:'2.8vh', paddingTop:'1vw', paddingBottom:'1vw', paddingLeft:'3vw', paddingRight:'3vw', backgroundColor:'black', color:'white', borderRadius:'10px', cursor:'pointer', position:'absolute', border:'2px solid black'}}>
              Lets Go
            </span>
          </div>
          
        </div>
      </div>
     }
     />

     <div className='full-screen'>
        <div style={{fontSize:'4vh', marginTop:'10vh', textAlign:'center', width:'90vw'}}>
          <div style={{paddingLeft:'10vw', paddingRight:'10vw'}}>
            Thought it might be tough to fit into your workflow? We've simplified it! Just check out the picture below, and you're good to go!
          </div>
        
          <div>
              <video id="myVideo" style={{width:'90vw'}} autoPlay loop muted playsInline>
                  <source src={map} type="video/mp4" />
              </video>
          </div>
        </div>
     </div>

     <SideBySide lcolor='rgb(4, 130, 118)' rcolor='rgb(34, 160, 148)' height='30vh'
      left={
        <div style={{fontSize:'4vh', position:'relative', width:'100%', textAlign:'center', marginTop:'13vh'}}>
          I can Talk in REALTIME with YOU
        </div>
      }
      right={
        <div style={{fontSize:'4vh', position:'relative', width:'100%', textAlign:'center', marginTop:'13vh'}}>
          I can SEE the the World TOO
        </div>
      }
     />

     <SideBySide lcolor='black' rcolor='#F4B324'
      left={
        <div style={{position:'absolute', display:'flex', justifyContent:'center', width:'100%', marginTop:'2.5vw'}}>
          <div>
            <img style={{width:'40vw'}} src={hi_there} />
          </div>
          <div style={{position:'absolute', top:'6vh', backgroundColor:'white', left:'5vw', fontSize:'4vh', padding:'2vh', border:'2px solid black', borderRadius:'5px'}}>
            Hello There...👋
          </div>
        </div>
      }
      right={
        <div style={{position:'absolute', display:'flex', justifyContent:'center', width:'100%', marginTop:'2.5vw'}}>
          <div>
            <img style={{width:'40vw'}} src={wow} />
          </div>
          <div style={{position:'absolute', top:'6vh', backgroundColor:'white', left:'5vw', fontSize:'4vh', padding:'2vh', border:'2px solid black', borderRadius:'5px'}}>
            Wow...🤩
          </div>

          <img id='s3' src={woohoo} style={{position:'absolute', top:'96vh', left:'25vw', borderRadius:'5px', width:'25vw'}} />

        </div>
      }
     />

    <div className='full-screen'>
        <div style={{fontSize:'6vh', marginTop:'10vh', textAlign:'center', width:'90vw'}}>
          <div style={{paddingLeft:'10vw', paddingRight:'10vw'}}>
            Start using it TODAY
          </div>
          <br />
          <div style={{paddingLeft:'22vw', paddingRight:'22vw', fontSize:'3vh', textAlign:'center'}}>
            Start using GPT-4 now to enhance productivity and creativity. Its advanced language processing generates high-quality content, answers complex questions, and automates tasks. Save time and unlock new opportunities by integrating GPT-4 into your workflow today.
          </div>
          <br />
          <div className='navbar-menu' style={{fontSize:'2vh', textAlign:'center', marginBottom:'10vh'}}>
            Explore Now →
          </div>
        </div>
     </div>

     <SideBySide lcolor='#fA8DE4'
      left={
        <div style={{position:'absolute', display:'flex', justifyContent:'center', width:'100%', marginTop:'1vw'}}>
          <div>
            <img style={{width:'40vw'}} src={f1} />
          </div>
        </div>
      }

      right={
        <div style={{display:'flex', justifyContent:'center', position:'absolute', width:'100%', marginTop:'13vh', marginLeft:'2vw'}}>
          <div style={{width:'80%', textAlign:'left'}}>
              <div style={{fontSize:'4vh'}}>
                Need Anything, Just Ask
              </div>
              <br />
              <div style={{fontSize:'3vh'}}>
                  <div>
                      ChatGPT commands empower tasks like summarizing, answering, translating, creating, analyzing, recommending, providing feedback, and brainstorming efficiently.
                  </div>
                  <br />
                  <div>→ Generate summary</div>
                  <div>→ Answer question</div>
                  <div>→ Translate text</div>
                  <div>→ Create content</div>
                  <div>→ Analyze data</div>
                  <div>→ Recommend products</div>
                  <div>→ Provide feedback</div>
                  <div>→ Brainstorm ideas</div>
              </div>
              
          </div>
        </div>
      }
     />

      <div className='full-screen'>
        <div style={{position:'relative', height:'calc((100vw - 4px) / 3)'}}>
            <img src={mira} style={{width:'calc(100vw - 4px)', position:'relative'}} />
            <div className='else-color' style={{fontSize:'4vh', position:'absolute', top:'17vh', left:'4vw', width:'60vw'}}>
              “GPT-4o reasons natively across voice, text and vision meaning it is much faster and allows for natural, immersive interaction with ChatGPT.”
            </div>
            <div className='else-color' style={{fontSize:'4vh', position:'absolute', top:'38vh', left:'51vw', width:'60vw'}}>
              - Mira Murati
            </div>
        </div>
      </div>

      <div className='full-screen' style={{backgroundColor:'black', height:'60vh', justifyContent:'left'}}>
          <div style={{position:'relative', height:'50px', width:'40%', marginTop:'10vh', marginLeft:'4vw', fontSize:'5vh', color:'white'}}>
              Subscribe us to stay up-to-date.
              <div style={{display:'flex', marginTop:'2vh'}}> 
                <input style={{height:'5vh', width:'30vw', border:'none', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px', fontSize:'4vh' }} />
                <div style={{userSelect:'none' ,cursor:'pointer', paddingLeft:'1vw', paddingRight:'1vw', backgroundColor:'rgb(34, 160, 148)', borderTopRightRadius:'5px', borderBottomRightRadius:'5px', height:'5.2vh', fontSize:'1.8vw'}}>
                  →
                </div>
              </div>
          </div>
          <div style={{position:'absolute', bottom:'1vh', width:'100%', textAlign:'center', color:'white', fontSize:'2vh'}}>
            Made with ❤️ by Jeet Joshi
          </div>
      </div>
    </div>
  )
}

export default App

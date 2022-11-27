import "./feed.css"
import React from "react"
import ImageIcon from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import NotesIcon from '@mui/icons-material/Notes';
import CreateIcon from '@mui/icons-material/Create';
import VideocamIcon from '@mui/icons-material/Videocam';
import InputOption from "./InputOption";
import { collection, addDoc, serverTimestamp, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase"
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import FlipMove from 'react-flip-move';


export default function Feed() {

    let [posts, setPosts] = React.useState([])
    let [message, setMessage] = React.useState('')

    const user = useSelector(selectUser)


    function mesasgeHanller(e) { setMessage(e.target.value) }
    let num = 0
    React.useEffect(() => {
        num = + 1
        console.log('here' + num)
        // async function init() {
        //     const querySnapshot = await getDocs(collection(db, "posts"));
        //     var result = querySnapshot.docs.map(doc => (
        //         {
        //             id: doc.id,
        //             data: doc.data()
        //         }
        //     ))
        //     return setPosts(result)

        // }

        // init();
        let q = query(collection(db, "posts"), orderBy('timestamp', 'desc'));
        onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        });

    }, [])



    async function sendPost(e) {
        e.preventDefault();

        const post = await addDoc(collection(db, "posts"), {
            name: user.displayName,
            message: message,
            description: user.email,
            Image: user.photoURL || '',
            timestamp: serverTimestamp()
        });

        setMessage('');

    }



    //-------------------------------------------------------------

    return (
        <div className="feed">
            <div className="feed__inputcontainer">
                <div className="feed__input">
                    <CreateIcon />

                    <form action="">
                        <input value={message} onChange={mesasgeHanller} type="text" />
                        <button onClick={sendPost}>send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption
                        Icon={ImageIcon}
                        title="Photo"
                        color="#E7A33E"
                    />

                    <InputOption
                        Icon={VideocamIcon}
                        title="Video"
                        color="#70B5F9"
                    />

                    <InputOption
                        Icon={EventIcon}
                        title="Event"
                        color="#C0CBCD"
                    />

                    <InputOption
                        Icon={NotesIcon}
                        title="Write article"
                        color="#7FC15E"
                    />
                </div>
            </div>


            {/*  posts */}

            <div className="feed__posts">
                <FlipMove>
                    {posts.map(({ id, data: { name, description, message, image } }) => {
                        return (
                            <Post
                                key={id}
                                name={name}
                                desctiption={description}
                                message={message}
                                image={image}
                            />
                        )
                    })}
                </FlipMove>
            </div>
        </div>
    )
}
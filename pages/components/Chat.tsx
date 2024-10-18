import React, {useState, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Chat = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const iframe = document.getElementById('chat') as HTMLIFrameElement
        iframe.onload = () => setLoading(false);
    }, [])

    return (
    <div>
        {loading && (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '600px'
            }}>
                <CircularProgress />
            </div>
        )}
        <iframe id="chat"
            title="Chat about me"
            width="600"
            height="600"
            src="https://chatbot-c728c4.netlify.app/"
            style={{ display: loading ? 'none' : 'block', width: '75vh' }}>
        </iframe>
    </div>
  )
}

export default Chat
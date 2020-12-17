# csp-promise

Simple Javascript CSP lib using Promise.

## Usage

    const csp = require('./lib')  
      
    const player = async (name, channel) => {  
      while (true) {  
        const hit = await csp.take(channel)  
        console.log({ name, hit })  
        await csp.sleep(1000)  
        await csp.put(channel, hit + 1)  
      }  
    }  
      
    (async () => {  
      const channel = csp.channel()  
        
      player('ping', channel)  
      player('pong', channel)  
      
      await csp.put(channel, 0)  
    })()

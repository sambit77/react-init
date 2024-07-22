import React from 'react'

function Card({username = "Catto" , post = "Not Assigned Yet" , src = ""}) {

    //console.log(props);
  return (
    <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src={src} alt="" width="384" height="512"/>
            <div className="pt-6 space-y-4">
                <blockquote>
                <p className="text-lg font-medium">
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, cum?
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div>
                    {username}
                </div>
                <div>
                    {post}
                </div>
                </figcaption>
            </div>
            </figure>
    </div>
  )
}

export default Card
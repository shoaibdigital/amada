
                                <div class="bs-features">
                                    <div class="lyt-features">
                                        <div class="">
                                            <h2 class="title">FEATURES</h2>
                                            <div class="sec-desc">
                                                {
                                                    data.map((item)=>{
                                                       return(
                                                           <>
                                                        <h3 class="sub-title">{item.subTitle}</h3>
                                                        <ul className="mod-list-circle">
                                                        {
                                                            item.point.map((points)=>{
                                                                return (
                                                                    <>
                                                                    <li>{points.point}
                                                                    <ul className="inside-list">
                                                                           {
                                                                            points.subpoints.map((dot)=>{
                                                                              return (
                                                                                  <>
                                                                              <li>{dot.subPoint}</li>
                                                                              </>
                                                                              )
                                                                            })
                                                                        }  
                                                                        </ul>  
                                                                        </li> 
                                                                        </>
                                                                )
                                                               
                                                            })
                                                        }
                                                         </ul>
                                                         </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                   </div>
                                                   </div>
                                                   </div>
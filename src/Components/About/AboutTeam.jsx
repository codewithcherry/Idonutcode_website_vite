import React from 'react'

const AboutTeam = () => {

    const teamData=[
        {
          "id": "klwj29090u",
          "name": "John Doe",
          "role": "Software Developer",
          "linkedin": "https://www.linkedin.com/in/johndoe",
          "github": "https://github.com/johndoe",
          "instagram": "https://www.instagram.com/johndoe",
          "profileUrl": "https://t3.ftcdn.net/jpg/01/73/77/00/360_F_173770068_LRQyNUZQn9WtQyJoJsOEwK8qwBzypBm0.jpg"
        },
        {
          "id": "a8jf3l2k9h",
          "name": "Emma Brown",
          "role": "Data Scientist",
          "linkedin": "https://www.linkedin.com/in/emmabrown",
          "github": "https://github.com/emmabrown",
          "instagram": "https://www.instagram.com/emmabrown",
          "profileUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JXTGHFY17JKveGhEsuP2rz0qxFMoKb6eHg&usqp=CAU"
        },
        {
          "id": "x9l3k2o8m5",
          "name": "Liam Johnson",
          "role": "Frontend Developer",
          "linkedin": "https://www.linkedin.com/in/liamjohnson",
          "github": "https://github.com/liamjohnson",
          "instagram": "https://www.instagram.com/liamjohnson",
          "profileUrl": "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg"
        },
        {
          "id": "p3m9n2o4k1",
          "name": "Olivia Davis",
          "role": "Backend Developer",
          "linkedin": "https://www.linkedin.com/in/oliviadavis",
          "github": "https://github.com/oliviadavis",
          "instagram": "https://www.instagram.com/oliviadavis",
          "profileUrl": "https://i.imgur.com/HAL10fll.png"
        },
        {
          "id": "y7n8b4v6m2",
          "name": "Noah Wilson",
          "role": "Full Stack Developer",
          "linkedin": "https://www.linkedin.com/in/noahwilson",
          "github": "https://github.com/noahwilson",
          "instagram": "https://www.instagram.com/noahwilson",
          "profileUrl": "https://images.unsplash.com/photo-1509839862600-309617c3201e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
          "id": "z5k2m8l1j4",
          "name": "Sophia Martinez",
          "role": "DevOps Engineer",
          "linkedin": "https://www.linkedin.com/in/sophiamartinez",
          "github": "https://github.com/sophiamartinez",
          "instagram": "https://www.instagram.com/sophiamartinez",
          "profileUrl": "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/8-1-1.jpg?resize=1200%2C1200&ssl=1"
        },
        {
          "id": "t3b7c1k8j2",
          "name": "James Anderson",
          "role": "Cloud Architect",
          "linkedin": "https://www.linkedin.com/in/jamesanderson",
          "github": "https://github.com/jamesanderson",
          "instagram": "https://www.instagram.com/jamesanderson",
          "profileUrl": "https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg"
        },
        {
          "id": "w9n6h3k4l2",
          "name": "Mia Taylor",
          "role": "Machine Learning Engineer",
          "linkedin": "https://www.linkedin.com/in/miataylor",
          "github": "https://github.com/miataylor",
          "instagram": "https://www.instagram.com/miataylor",
          "profileUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPs8ubbPPA31JXQNO9P4WAnPpGQTJFINxn34IwJhk2AgIcDmHKMiojrVfcuPMJMxerBc&usqp=CAU"
        }
      ]
      
  return (
    <div>
      <div>
        <div>
            <span>Super Team</span>
            <h1>Meet The Super Team</h1>
            <p>we are cross-disciplinary team that loves to create a great experineces.</p>
        </div>
        <div>
            <div>
                {teamData.map((item,index)=>{
                    return (
                        <div key={index}>
                            <img src={item.profileUrl} alt="" />
                            <h3>{item.name}</h3>
                            <p>{item.role}</p>
                            <div>
                                <a href={item.linkedin}>
                                    <span>
                                    <svg fill="#8fccf7" height="24px" width="24px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-8 -8 48.00 48.00" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3 c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"></path> </g></svg>
                                    </span>
                                </a>
                                <a href={item.instagram}>
                                    <span>
                                    <svg width="24px" height="24px" viewBox="-8 -8 48.00 48.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.7887 28C8.55374 28 5.53817 27.0591 3 25.4356C5.15499 25.5751 8.95807 25.2411 11.3236 22.9848C7.76508 22.8215 6.16026 20.0923 5.95094 18.926C6.25329 19.0426 7.6953 19.1826 8.50934 18.856C4.4159 17.8296 3.78793 14.2373 3.92748 13.141C4.695 13.6775 5.99745 13.8641 6.50913 13.8174C2.69479 11.0882 4.06703 6.98276 4.74151 6.09635C7.47882 9.88867 11.5812 12.0186 16.6564 12.137C16.5607 11.7174 16.5102 11.2804 16.5102 10.8316C16.5102 7.61092 19.1134 5 22.3247 5C24.0025 5 25.5144 5.71275 26.5757 6.85284C27.6969 6.59011 29.3843 5.97507 30.2092 5.4432C29.7934 6.93611 28.4989 8.18149 27.7159 8.64308C27.7224 8.65878 27.7095 8.62731 27.7159 8.64308C28.4037 8.53904 30.2648 8.18137 31 7.68256C30.6364 8.52125 29.264 9.91573 28.1377 10.6964C28.3473 19.9381 21.2765 28 11.7887 28Z" fill="#47ACDF"></path> </g></svg>
                                    </span>
                                </a>
                                <a href={item.github}>
                                    <span>
                                        <svg width="24px" height="24px" viewBox="-12 -12 72.00 72.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Github-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-700.000000, -560.000000)" fill="#3E75C3"> <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" id="Github"> </path> </g> </g> </g></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam

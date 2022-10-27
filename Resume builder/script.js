const input = document.querySelectorAll('input');


const output = document.querySelector('.section2');


function resume(){
    var myWindow = window.open("", "_self");
    output.innerHTML = `
<div class="container2">
    <div class="header">
        <div class="full-name">
            <!-- entering full name wiht js  -->
            <span class="first-name">${input['0'].value}</span>
        </div>
        <div class="contact-info">
            <span class="email">Email: </span>

            <!-- entering email with js  -->
            <span class="email-val">${input['2'].value}</span>

            <span class="separator"></span>
            <span class="phone">Phone: </span>

            <!-- entering phone number with js  -->
            <span class="phone-val">${input['3'].value}</span>

            <span class="separator"></span>
            <span class="email">Address: </span>

            <!-- enering address with js  -->
            <span class="phone-val">${input['4'].value}</span>


            <span class="separator"></span>

            <span class="email">Portfolio Site: </span>

            <!-- entering the porfolio site in link and projects as a link button with js  -->
            <a href="https://codepen.io/your-work" target="_blank">
                <span class="phone-val">${input['5'].value}</span>

            </a>

        </div>

        <div class="about">

            <!-- Entering Profession  -->
            <span class="position">${input['1'].value}</span>
            <!-- entering abour your self here with js  -->
            <span class="desc">${input['6'].value}
            </span>


        </div>
    </div>


    <div class="details">
        <div class="section">
            <div class="section__title">Experience</div>
            <div class="section__list">
                <div class="section__list-item">
                    <div class="left">

                        <!-- entering first professional experience with js  -->

                        <!-- prvious company  -->
                        <div class="name">${input['18'].value}</div>

                        <!-- previous company address  -->
                        <div class="addr">${input['19'].value}</div>

                    </div>
                    <div class="right">

                        <!-- previous job  -->
                        <div class="name">${input['20'].value}</div>

                        <!-- abour previous job  -->
                        <div class="desc">${input['21'].value}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__title">Skills</div>
            <div class="section__list">
                <div class="section__list-item">
                    <div class="left">

                        <!-- enterinng the skill 1 with js  -->
                        <!-- Skill 1  -->
                        <div class="name">${input['8'].value}</div>

                    </div>
                    <div class="right">

                        <!-- Skill 2 -->
                        <div class="name">${input['9'].value}</div>

                    </div>
                    <br>
                    <br>
                    <div class="left">

                        <!-- enterinng the skill 1 with js  -->
                        <!-- Skill 3  -->
                        <div class="name">${input['10'].value}</div>

                    </div>
                    <div class="right">

                        <!-- Skill 4 -->
                        <div class="name">${input['11'].value}</div>

                    </div>
                </div>
            </div>
        </div>


        <div class="section">
            <div class="section__title">Education</div>
            <div class="section__list">
                <div class="section__list-item">
                    <div class="left">

                        <!-- Entering University name  -->
                        <div class="name">${input['12'].value}</div>
                        <div class="duration">${input['13'].value}</div>
                    </div>
                    <div class="right">
                        <!-- entering course name  -->
                        <div class="name">${input['14'].value}</div>
                        <div class="desc">${input['15'].value}</div>
                    </div>
                </div>

                <div class="section__list-item">
                    <div class="left">
                        <!-- Entering 12 class stream with js  -->
                        <div class="name">${input['16'].value}</div>
                    </div>
                    <div class="right">
                        <div class="desc">${input['17'].value}</div>
                    </div>
                </div>

            </div>

        </div>
        <div class="section">
            <div class="section__title">Projects</div>
            <div class="section__list">
                <div class="section__list-item">

                    <!-- entering firt project name with js  -->
                    <div class="name">${input['22'].value}</div>

                    <!-- about your project 1  -->
                    <div class="text">${input['23'].value}
                    </div>


                    <!-- entering link of project 1  -->
                    <span class="email">Project link: </span>
                    <a href="https://codepen.io/knaman2609/pen/Zbyjvv" target="_blank">
                        <div class="text">${input['24'].value}</div>
                    </a>
                </div>


                <div class="section__list-item">
                    <!-- entering second project name with js  -->
                    <div class="name">${input['25'].value}</div>
                    <!-- about your project 2  -->
                    <div class="text">${input['26'].value}
                    </div>
                    <!-- entering link of project 2  -->
                    <span class="email">Project link: </span>
                    <a href="https://codepen.io/knaman2609/pen/Zbyjvv" target="_blank">
                        <div class="text">${input['27'].value}</div>
                    </a>
                </div>
                <br>
            </div>
        </div>
    </div>


</div>
    
    `


}

function resume2(){
    output.innerHTML = `
    <div class="container4">
        <section class="section_left">

            <h1 class="title">${input['0'].value}</h1>
            <hr>
            </hr>
            <br>
            <h5 class="sub-title">CONTACT INFO</h5>
            <ul>
                <!-- phone  -->
                <li><i class="fa fa-phone"></i> ${input['3'].value}</li>
                <!-- email  -->
                <li><i class="fa fa-envelope"></i> ${input['2'].value}</li>
                <!-- porfolio sit  -->
                <li><i class="fa fa-globe"></i> ${input['5'].value}</li>
                <!-- address  -->
                <li><i class="fa fa-map-marker"></i>${input['4'].value}</li>


                <ul>

                    <h5 class="sub-title">EDUCATION</h5>
                    <em>University</em>
                    <!-- University -->
                    <p>${input['12'].value}</p>
                    <em>College</em>
                    <!-- college name  -->
                    <p>${input['13'].value}</p>
                    <em>Course</em>
                    <!-- courrse name  -->
                    <p>${input['14'].value}</p>
                    <br>


                    <h5 class="sub-title">Projects</h5>
                    <!-- project 1  -->
                    <label class="label4">${input['22'].value}</label>
                    <div class="progress_container">
                        <div class="progress_bar" style="width:25%"></div>
                    </div>

                    <!-- link of project 1 -->
                    <label class="label4">${input['24'].value}</label>
                    <div class="progress_container">
                        <div class="progress_bar" style="width:25%"></div>
                    </div>

                    <!-- project 2 -->
                    <label class="label4">${input['25'].value}</label>
                    <div class="progress_container">
                        <div class="progress_bar" style="width:25%"></div>
                    </div>

                    <!-- link of project 2 -->
                    <label class="label4">${input['27'].value}</label>
                    <div class="progress_container">
                        <div class="progress_bar" style="width:90%"></div>
                    </div>

        </section>
        <section class="section_right">
            <!-- job title -->
            <h1 class="title">${input['1'].value}</h1>
            <br>
            <!-- about your self  -->
            <p>${input['6'].value}</p>
            <br>
            <!-- professional EXPERIENCE  -->
            <h1 class="title">EXPERIENCE</h1>

            <!-- previous company  -->
            <h5 class="sub-title">${input['18'].value}</h5>

            <!-- address of previous company -->
            <p>${input['19'].value}</p>

            <!-- previous job  -->
            <h5 class="sub-title">${input['20'].value}</h5>
            <!-- about your previous job  -->
            <p>${input['21'].value}</p>

            <br>
            <br>
            <h1 class="title">PROFESSIONAL SKILLS</h1>
            <table>
                <tr>

                    <!-- skill 1  -->
                    <td>
                    ${input['8'].value}
                    </td>
                    <td>
                        <div class="progress_container">
                            <div class="progress_bar" style="width:90%"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <!-- skill 2  -->
                    <td>
                    ${input['9'].value}
                    </td>
                    <td>
                        <div class="progress_container">
                            <div class="progress_bar" style="width:70%"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <!-- skill 3  -->
                    <td>
                    ${input['10'].value}
                    </td>
                    <td>
                        <div class="progress_container">
                            <div class="progress_bar" style="width:80%"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <!-- skill 4 -->
                    <td>
                    ${input['11'].value}
                    </td>
                    <td>
                        <div class="progress_container">
                            <div class="progress_bar" style="width:86%"></div>
                        </div>
                    </td>
                </tr>
            </table>
        </section>
    
    
    `
}


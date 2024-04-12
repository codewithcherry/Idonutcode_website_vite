import React from "react";
import { useState } from "react";

const SettingsPersonalInfo = () => {

  const [edit,setEdit]=useState(false)

  const handleEdit =()=>{
    setEdit(true)
  }

  return (
    <div className="h-screen bg-white overflow-scroll">
      <div className="">
        <div className="text-black text-center  p-2 ">
          <h1 className="text-xl font-semibold">Personal Information</h1>
          <p className="text-md text-red-500">you can edit your personal information here</p>
        </div>
        <div className="relative m-2 p-2">
          {
            !edit && <button className="absolute top-0 right-5 bg-slate-300 p-2 m-2 rounded-2xl text-semibold" onClick={handleEdit}>edit <span> </span></button>
          }
        </div>
        <div className="m-4 p-4">
          <form >
            <div className="m-2 p-2">
              <h1 className="text-xl text-slate-600 font-semibold">Full Name</h1>
              <p className="text-sm text-red-500">you can edit your full name here</p>
            </div>
            <div className="flex border-2 m-2 p-4 rounded-sm">
            <div className="relative m-2">
              <label className=" absolute -top-4 bg-white px-1 left-2 text-md  text-slate-600 m-2 " htmlFor="">First Name</label> 
              <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600"  type="text" placeholder="first name" disabled={!edit}/>
            </div>
            <div className="relative m-2"> 
              <label className="absolute -top-4 left-2 px-1 text-md bg-white text-slate-600 m-2 " htmlFor="">Middle Name</label>
              <input  className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="text" placeholder="last name" disabled={!edit}/>
            </div>
            <div className="relative m-2"> 
              <label className="absolute -top-4 left-2 px-1 text-md bg-white text-slate-600 m-2 " htmlFor="">Last Name</label>
              <input  className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="text" placeholder="last name" disabled={!edit}/>
            </div>
            </div>
            <div>
              <div className="m-2 p-2">
                <h1 className="text-xl text-slate-600 font-semibold">Contact Details</h1>
                <p className="text-sm text-red-500">you can update your primary and secondary email id here</p>
              </div>
              <div className="border-2 rounded-md p-4 m-2 ">
                <div className="relative m-2">
                <label className="absolute -top-4 left-2 text-md bg-white px-1 text-slate-600 m-2 " htmlFor="">Phone</label>
                <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="phone" placeholder="+xx xxx-xxx-xxxx"disabled={!edit}/>
                </div>
                <div className="relative m-2">
                <label className="absolute -top-4 left-2 text-md bg-white px-1 text-slate-600 m-2 " htmlFor="">Primary Email</label> 
                <input  className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="email" placeholder="example@email.com" disabled={!edit}/>
                </div>
                <div className="relative m-2">
                <label className="absolute -top-4 left-2 text-md bg-white px-1 text-slate-600 m-2 " htmlFor="">Secondary Email</label> 
                <input  className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="email" placeholder="secondary@email.com" disabled={!edit}/>
                </div>
              </div>
            </div>
            <div>
              <div className="m-2 p-2">
                <h1 className="text-xl text-slate-600 font-semibold">Other Details</h1>
              </div>
           <div className="border-2 m-2 p-4 rounded-md">
            
           <div className="relative m-2">
                      <label className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 " htmlFor="">DOB</label> 
                      <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="date"  disabled={!edit}/>
            </div>

            <div className="relative m-2">
              <label className="absolute -top-4 left-2 bg-white px-1 text-md text-slate-600 m-2 my-3" htmlFor="">Gender</label> 
              <select name="gender" id="" className="m-2 p-2 ring-1 rounded ring-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-300" >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Do not want to mention">
                  Do not want to mention
                </option>
              </select>
            </div>
            
            <div className="relative m-2">
              <label className="absolute -top-4 left-2 px-1 text-md bg-white text-slate-600 m-2 " htmlFor="">Country</label> 
              <select className="m-2 p-2 ring-1 rounded ring-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-300" id="country" name="country" >
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">
                  Cocos (Keeling) Islands
                </option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">
                  Congo, The Democratic Republic of The
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">
                  Falkland Islands (Malvinas)
                </option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">
                  French Southern Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">
                  Heard Island and Mcdonald Islands
                </option>
                <option value="Holy See (Vatican City State)">
                  Holy See (Vatican City State)
                </option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">
                  Iran, Islamic Republic of
                </option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">
                  Korea, Democratic People's Republic of
                </option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">
                  Lao People's Democratic Republic
                </option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">
                  Libyan Arab Jamahiriya
                </option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">
                  Macedonia, The Former Yugoslav Republic of
                </option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">
                  Micronesia, Federated States of
                </option>
                <option value="Moldova, Republic of">
                  Moldova, Republic of
                </option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">
                  Palestinian Territory, Occupied
                </option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">
                  Saint Pierre and Miquelon
                </option>
                <option value="Saint Vincent and The Grenadines">
                  Saint Vincent and The Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">
                  South Georgia and The South Sandwich Islands
                </option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">
                  Svalbard and Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">
                  Syrian Arab Republic
                </option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">
                  Tanzania, United Republic of
                </option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">
                  Turks and Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">
                  Virgin Islands, British
                </option>
                <option value="Virgin Islands, U.S.">
                  Virgin Islands, U.S.
                </option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            </div>
            </div>
            <div className="">
              <div className="m-2 p-2">
                <h1 className="text-xl text-slate-600 font-semibold">Education Details</h1>
                <p className="text-sm text-red-500">You can edit and update your educational details here</p>
              </div>
              <div className="grid grid-cols-3 m-2 border-2 rounded-md p-4 ">  
                <div className="relative m-2">
                    <label className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 my-3" htmlFor="">Occupation</label> 
                    <select className="m-2 p-2 w-40 border rounded ring-1 ring-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-300" >
                      <option value="Student">Student</option>
                      <option value="Employee">Employee</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Self-Employed">Self-Employed</option>
                      <option value="Bussiness">Bussiness</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                    <div className="relative m-2">
                      <label className=" absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 " htmlFor="">Degree</label> 
                      <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="text" placeholder="enter graduation degree" disabled={!edit}/>
                    </div>
                    <div className="relative m-2">
                      <label className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 " htmlFor="">Passout year</label> 
                      <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="date" disabled={!edit} />
                    </div>
                    <div className="relative m-2">
                      <label className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 " htmlFor="">specification</label> 
                      <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="text" placeholder="enter specialisation" disabled={!edit} />              
                    </div>
                    <div className="relative m-2">
                      <label className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 " htmlFor="">University</label> 
                      <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="text" placeholder="College/University" disabled={!edit}/>
                    </div>  
              </div>
                    
            </div>

            <div>
              <div className="m-2 p-2">
                <h1 className="text-xl text-slate-600 font-semibold">Address</h1>
                <p className="text-sm text-red-500">You can update your residence address here</p>
              </div>
              <div className="border-2 rounded-md m-2">
                <form >
                  <div className="grid grid-cols-3 m-2 p-2">
                      <div className="relative m-2">
                          <label className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 " htmlFor="">House no.</label> 
                          <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="text" placeholder="Door No/House No" disabled={!edit}/>
                      </div>
                      <div className="relative m-2">
                      <label className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 " htmlFor="">Street Name</label> 
                      <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="text" placeholder="street name" disabled={!edit} />
                    </div>
                    <div className="relative m-2">
                      <label className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 " htmlFor="">Area/Locality</label> 
                      <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="text" placeholder="location" disabled={!edit}/>
                    </div>
                    <div className="relative m-2">
                      <label className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 " htmlFor="">Landmark</label> 
                      <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="text" placeholder="landmark" disabled={!edit}/>
                    </div>
                    <div className="relative m-2">
                      <label className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 " htmlFor="">city</label> 
                      <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="text" placeholder="city" disabled={!edit}/>
                    </div>
                    <div className="relative m-2">
                      <label htmlFor="" className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 ">State</label>
                      <select className="m-2 p-2 w-40 border rounded ring-1 ring-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-300" >
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CT">Chhattisgarh</option>
                    <option value="GA">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="GA">Goa</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KA">Karnataka</option>
                    <option value="KL">Kerala</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                          <option value="MN">Manipur</option>
                          <option value="ML">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NL">Nagaland</option>
                    <option value="OR">Odisha</option>
                    <option value="PB">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="TG">Telangana</option>
                    <option value="TR">Tripura</option>
                    <option value="UT">Uttarakhand</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="WB">West Bengal</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="CH">Chandigarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="PY">Puducherry</option>
                  </select>
                    </div>
                    <div className="relative m-2">
                      <label className="absolute -top-4 left-2 px-1 bg-white text-md text-slate-600 m-2 " htmlFor="">zipcode/postal</label> 
                      <input className="m-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300 ring-1 ring-slate-600" type="text" placeholder="postal code" disabled={!edit}/>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </form>
        </div>
        <div>
          {edit && <div className="text-right m-2 p-2">
            <button className="bg-green-400 p-2 m-2 rounded-xl text-white font-semibold">save changes</button>
            <button className="bg-red-500 p-2 m-2 rounded-xl text-white font-semibold" onClick={()=>setEdit(false)}>Cancel</button>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default SettingsPersonalInfo;

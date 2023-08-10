import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Aegea_Server</title>
        <meta property="og:title" content="Aegea_Server" />
      </Helmet>
      <div className="home-menu">
        <div className="home-menu-containers">
          <div id="id_desktop_menu1" className="home-desktop-menu">
            <img alt="image" src="/aegea-logo-600w.png" className="home-logo" />
            <div className="home-options">
              <span className="home-info">Info</span>
              <span onclick="f_home_menu()" className="home-home">
                Home
              </span>
              <span className="home-alarms">Alarms</span>
              <span onclick="f_show_settings()" className="home-settings">
                Settings
              </span>
              <span onclick="f_show_about()" className="home-about">
                About
              </span>
            </div>
            <span onclick="f_show_login()" className="home-log-in">
              Log In
            </span>
          </div>
          <div id="id_desktop_menu2" className="home-mobile-menu">
            <img
              alt="image"
              src="/aegea-logo-600w.png"
              className="home-logo1"
            />
            <img
              alt="image"
              src="/menu-burger.svg"
              onclick="f_mobil_dropmenu()"
              className="home-burger"
            />
          </div>
        </div>
        <div
          id="id_mobil_dropmenu"
          onclick="display_hide('id_mobil_dropmenu')"
          className="home-drop-menu"
        >
          <div onclick="f_show_login()" className="home-login1">
            <img alt="image" src="/user_burger.svg" className="home-image" />
            <span className="home-log-in2">Log In</span>
          </div>
          <div className="home-info1">
            <img alt="image" src="/info_burger.svg" className="home-image01" />
            <span className="home-info2">Info</span>
          </div>
          <div onclick="f_home_menu()" className="home-home1">
            <img alt="image" src="/home_burger.svg" className="home-image02" />
            <span className="home-home2">Home</span>
          </div>
          <div className="home-alarms1">
            <img alt="image" src="/alarm_burger.svg" className="home-image03" />
            <span className="home-alarms2">Alarms</span>
          </div>
          <div onclick="f_show_settings()" className="home-settings1">
            <img
              alt="image"
              src="/settings_burger.svg"
              className="home-image04"
            />
            <span className="home-settings2">Settings</span>
          </div>
          <div onclick="f_show_about()" className="home-about1">
            <img alt="image" src="/about_burger.svg" className="home-image05" />
            <span className="home-about2">About</span>
          </div>
        </div>
        <span id="id_info" className="home-info3">
          Text
        </span>
      </div>
      <div id="id_panel" className="home-panel">
        <div id="id_screen_login" className="home-login3">
          <div className="home-container01">
            <label className="home-text">Sign In</label>
            <label className="home-text001">
              <span>Name</span>
              <br></br>
            </label>
            <input
              type="text"
              id="id_login_user"
              placeholder="user"
              className="home-textinput input"
            />
            <label className="home-label">
              <span>Password</span>
              <br></br>
            </label>
            <input
              type="password"
              id="id_login_pass"
              maxlength="20"
              minlength="4"
              ondblclick="f_toggle_pass(this.id)"
              placeholder="password"
              className="home-textinput01 input"
            />
            <button
              id="id_login_confrm"
              type="button"
              onclick="f_login_confirm()"
              className="home-button button"
            >
              Log In
            </button>
          </div>
          <img
            alt="image"
            src="/cancel-close-svgrepo-com.svg"
            onclick="display_hide('id_screen_login')"
            className="home-image06"
          />
        </div>
        <div id="id_screen_settings" className="home-settings3">
          <div className="home-buttons">
            <img
              alt="image"
              src="/bt_wifi.svg"
              loading="lazy"
              onclick="f_show_swifi()"
              className="home-wi-fi"
            />
            <img
              alt="image"
              src="/bt_user.svg"
              onclick="f_show_client()"
              className="home-client"
            />
            <img
              alt="image"
              src="/bt_clock.svg"
              onclick="f_stime()"
              className="home-clock"
            />
            <img
              alt="image"
              src="/bt_temp_setup.svg"
              onclick="f_show_temp_setup()"
              className="home-temperature"
            />
            <img
              alt="image"
              src="/bt_testing.svg"
              onclick="f_show_test()"
              className="home-test"
            />
            <img
              alt="image"
              src="/bt_home.svg"
              onclick="f_shome()"
              className="home-home3"
            />
            <img
              alt="image"
              src="/bt_fwupdate.svg"
              onclick="f_sfirmware()"
              className="home-fw"
            />
            <img
              alt="image"
              src="/bt_reboot.svg"
              onclick="display_show('id_screen_reboot')"
              className="home-reboot"
            />
          </div>
          <img
            alt="image"
            src="/cancel-close-svgrepo-com.svg"
            onclick="display_hide('id_screen_settings')"
            className="home-image07"
          />
        </div>
        <div id="id_screen_about" className="home-about3">
          <div className="home-header">
            <img
              alt="image"
              src="/about-svgrepo-com.svg"
              className="home-image08"
            />
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_about')"
              className="home-image09"
            />
          </div>
          <div className="home-device">
            <span className="home-text006">Device</span>
            <span className="home-text007">Undefined</span>
          </div>
          <div className="home-client1">
            <span className="home-text008">Client</span>
            <span id="id_about_client" className="home-text009">
              <span>Undefined</span>
              <br></br>
            </span>
          </div>
          <div className="home-stm-firmware">
            <span className="home-text012">STM Firmware</span>
            <span className="home-text013">
              <span>Undefined</span>
              <br></br>
            </span>
          </div>
          <div className="home-esp-firmware">
            <span className="home-text016">ESP Firmware</span>
            <span className="home-text017">
              <span>Undefined</span>
              <br></br>
            </span>
          </div>
          <div className="home-hardware">
            <span className="home-text020">Hardware</span>
            <span className="home-text021">
              <span>Undefined</span>
              <br></br>
            </span>
          </div>
          <div className="home-wifi-name">
            <span className="home-text024">WiFi Name</span>
            <span id="id_info_wname" className="home-text025">
              <span>Undefined</span>
              <br></br>
            </span>
          </div>
          <div className="home-wifi-signal">
            <span className="home-text028">WiFi Signal</span>
            <span id="id_info_wsignal" className="home-text029">
              <span>Undefined</span>
              <br></br>
            </span>
          </div>
          <div className="home-address">
            <span className="home-text032">Address</span>
            <span className="home-text033">
              <span>Undefined</span>
              <br></br>
            </span>
          </div>
        </div>
        <div id="id_screen_swifi_user" className="home--wi-fiuser">
          <div className="home-header01">
            <img alt="image" src="/bt_wifi.svg" className="home-image10" />
          </div>
          <div className="home-mac">
            <span className="home-text036">MAC</span>
            <span id="id_swifi_mac" className="home-text037">
              Undefined
            </span>
          </div>
          <div className="home-ap-ip">
            <span className="home-text038">AP IP</span>
            <span id="id_swifi_apip" className="home-text039">
              Undefined
            </span>
          </div>
          <div className="home-ruter-ip">
            <span className="home-text040">RUTER IP</span>
            <span id="id_swifi_ip" className="home-text041">
              <span>Undefined</span>
              <br></br>
            </span>
          </div>
          <div className="home-name">
            <span className="home-text044">WiFi Name</span>
            <input
              type="text"
              id="id_swifi_wname"
              className="home-textinput02 input"
            />
          </div>
          <div className="home-password">
            <span className="home-text045">WiFi Password</span>
            <input
              type="password"
              id="id_swifi_wpass"
              ondblclick="f_toggle_pass(this.id)"
              className="home-textinput03 input"
            />
          </div>
          <div className="home-wi-fi-enable">
            <span className="home-text046">Enable WiFi</span>
            <input
              type="checkbox"
              id="id_swifi_wenable"
              checked="true"
              className="home-checkbox"
            />
          </div>
          <div className="home-buttons01">
            <span
              id="id_swifi_usave"
              onclick="f_swifi_usave()"
              className="home-save"
            >
              SAVE
            </span>
          </div>
          <img
            alt="image"
            src="/cancel-close-svgrepo-com.svg"
            onclick="display_hide('id_screen_swifi_user')"
            className="home-image11"
          />
        </div>
        <div id="id_screen_swifi_servicer" className="home--wi-fiservicer">
          <div className="home-header02">
            <img alt="image" src="/bt_wifi.svg" className="home-image12" />
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_swifi_servicer')"
              className="home-image13"
            />
          </div>
          <div className="home-apip">
            <span className="home-text047">AP IP</span>
            <input
              type="text"
              id="id_swifi_apip_in"
              className="home-textinput04 input"
            />
          </div>
          <div className="home-a-name">
            <span className="home-text048">AP Name</span>
            <input
              type="text"
              id="id_swifi_apname"
              className="home-textinput05 input"
            />
          </div>
          <div className="home-a-password">
            <span className="home-text049">AP Password</span>
            <input
              type="password"
              id="id_swifi_appass"
              ondblclick="f_toggle_pass(this.id)"
              className="home-textinput06 input"
            />
          </div>
          <div className="home-mqtturl">
            <span className="home-text050">MQTT URL</span>
            <input
              type="text"
              id="id_swifi_mqtturl"
              className="home-textinput07 input"
            />
          </div>
          <div className="home-mq-tport">
            <span className="home-text051">MQTT Port</span>
            <input
              type="text"
              id="id_swifi_mqttport"
              className="home-textinput08 input"
            />
          </div>
          <div className="home-buttons02">
            <span
              id="id_swifi_ssave"
              onclick="f_swifi_ssave()"
              className="home-save1"
            >
              SAVE
            </span>
          </div>
        </div>
        <div id="id_screen_scred_user" className="home-scr-duser">
          <div className="home-header03">
            <img alt="image" src="/bt_user.svg" className="home-image14" />
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_scred_user')"
              className="home-image15"
            />
          </div>
          <div className="home-user">
            <span className="home-text052">USER Credentials</span>
          </div>
          <div className="home-a-name1">
            <span className="home-text053">Name</span>
            <input
              type="text"
              id="id_cred_name_user"
              className="home-textinput09 input"
            />
          </div>
          <div className="home-a-password1">
            <span className="home-text054">Password</span>
            <input
              type="password"
              id="id_cred_pass_user"
              ondblclick="f_toggle_pass(this.id)"
              className="home-textinput10 input"
            />
          </div>
          <div className="home-buttons03">
            <span onclick="f_cred_save('user')" className="home-save2">
              SAVE
            </span>
          </div>
        </div>
        <div id="id_screen_scred_servicer" className="home-scr-dservicer">
          <div className="home-header04">
            <img alt="image" src="/bt_user.svg" className="home-image16" />
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_scred_servicer')"
              className="home-image17"
            />
          </div>
          <div className="home-user1">
            <span className="home-text055">SERVICER Credentials</span>
          </div>
          <div className="home-a-name2">
            <span className="home-text056">Name</span>
            <input
              type="text"
              id="id_cred_name_servicer"
              className="home-textinput11 input"
            />
          </div>
          <div className="home-a-password2">
            <span className="home-text057">Password</span>
            <input
              type="password"
              id="id_cred_pass_servicer"
              ondblclick="f_toggle_pass(this.id)"
              className="home-textinput12 input"
            />
          </div>
          <div className="home-buttons04">
            <span onclick="f_cred_save('servicer')" className="home-save3">
              SAVE
            </span>
          </div>
        </div>
        <div id="id_screen_scred_admin" className="home-scr-dadmin">
          <div className="home-header05">
            <img alt="image" src="/bt_user.svg" className="home-image18" />
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_scred_admin')"
              className="home-image19"
            />
          </div>
          <div className="home-user2">
            <span className="home-text058">ADMIN Credentials</span>
          </div>
          <div className="home-a-name3">
            <span className="home-text059">Name</span>
            <input
              type="text"
              id="id_cred_name_admin"
              className="home-textinput13 input"
            />
          </div>
          <div className="home-a-password3">
            <span className="home-text060">Password</span>
            <input
              type="password"
              id="id_cred_pass_admin"
              ondblclick="f_toggle_pass(this.id)"
              className="home-textinput14 input"
            />
          </div>
          <div className="home-buttons05">
            <span onclick="f_cred_save('admin')" className="home-save4">
              SAVE
            </span>
          </div>
        </div>
        <div id="id_screen_stime" className="home--time">
          <div className="home-header06">
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_stime')"
              className="home-image20"
            />
            <div id="id_clock_img" className="home-clock1"></div>
          </div>
          <div className="home-a-name4">
            <span onclick="f_time_manual_update()" className="home-text061">
              UPDATE TIME MANUAL
            </span>
          </div>
          <div className="home-wi-fi-enable1">
            <span className="home-text062">Update time via NTP</span>
            <input
              type="checkbox"
              id="time_auto_update"
              checked="true"
              className="home-checkbox1"
            />
          </div>
          <div className="home-buttons06">
            <span onclick="f_settings_save_clock()" className="home-save5">
              SAVE
            </span>
          </div>
        </div>
        <div id="id_screen_temperature" className="home--temperature">
          <div className="home-header07">
            <img
              alt="image"
              src="/bt_temp_setup.svg"
              className="home-image21"
            />
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_temperature')"
              className="home-image22"
            />
          </div>
          <div className="home-name1">
            <span className="home-text063">Temperature setup</span>
          </div>
          <div className="home-status">
            <span className="home-status1">STATUS</span>
            <div className="home-ch1">
              <span className="home-text064">CH1</span>
              <span id="id_temp_setup_ch1_status" className="home-text065">
                Online
              </span>
            </div>
            <div className="home-ch2">
              <span className="home-text066">
                <span>CH2</span>
                <br></br>
              </span>
              <span id="id_temp_setup_ch2_status" className="home-text069">
                Online
              </span>
            </div>
          </div>
          <div className="home-saved">
            <span className="home-saved1">SAVED</span>
            <div id="id_stemp_setup_saved_box_nik" className="home-nik"></div>
            <div id="id_stemp_setup_saved_box_addr" className="home-addr"></div>
            <div
              id="id_stemp_setup_saved_box_temps"
              className="home-temp"
            ></div>
          </div>
          <div className="home-scan-and-reset">
            <button
              type="button"
              onclick="f_temp_setup_scan()"
              className="home-button1 button"
            >
              Scan
            </button>
            <button
              type="button"
              onclick="f_temp_setup_restat()"
              className="home-button2 button"
            >
              Restart
            </button>
          </div>
          <div id="id_stemp_setup_found_box" className="home-found">
            <span className="home-found1">FOUND</span>
            <div id="id_stemp_setup_found_box_nik" className="home-nik1"></div>
            <div
              id="id_stemp_setup_found_box_addr"
              className="home-addr1"
            ></div>
            <div
              id="id_stemp_setup_found_box_temps"
              className="home-temp1"
            ></div>
          </div>
          <div className="home-save6">
            <button
              type="button"
              onclick="f_temp_setup_save()"
              className="home-button3 button"
            >
              Save
            </button>
          </div>
        </div>
        <div id="id_screen_temps" className="home--test-temp">
          <div className="home-header08">
            <div id="id_temps_box" className="home-temperatures"></div>
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_temps')"
              className="home-image23"
            />
          </div>
        </div>
        <div id="id_screen_etemps" className="home--edit-temp">
          <div className="home-container02">
            <div className="home-container03">
              <label className="home-text070">
                Probe 
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </label>
              <label id="id_etemp_num" className="home-text071">
                AA:AA:AA:AA:AA:AA:AA:AA
              </label>
            </div>
            <label className="home-text072">
              <span>Name</span>
              <br></br>
            </label>
            <input
              type="text"
              id="id_etemps_name"
              className="home-textinput15 input"
            />
            <button
              type="button"
              onclick="f_etemps_save()"
              className="home-button4 button"
            >
              <span className="home-text075">
                <span className="home-text076">Save</span>
                <br></br>
              </span>
            </button>
          </div>
          <img
            alt="image"
            src="/cancel-close-svgrepo-com.svg"
            onclick="display_hide('id_screen_etemps')"
            className="home-image24"
          />
        </div>
        <div id="id_screen_inputs" className="home--test-in">
          <div className="home-header09">
            <div id="id_inputs_box" className="home-inputs"></div>
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_inputs')"
              className="home-image25"
            />
          </div>
        </div>
        <div id="id_screen_ein" className="home--edit-in">
          <div className="home-container04">
            <div className="home-container05">
              <label className="home-text078">
                Input 
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </label>
              <label id="id_ein_num" className="home-text079">
                <span className="home-text080">0</span>
                <br></br>
              </label>
            </div>
            <label className="home-text082">
              <span>Name</span>
              <br></br>
            </label>
            <input
              type="text"
              id="id_ein_name"
              className="home-textinput16 input"
            />
            <button
              type="button"
              onclick="f_ein_save()"
              className="home-button5 button"
            >
              <span className="home-text085">
                <span className="home-text086">Save</span>
                <br></br>
              </span>
            </button>
          </div>
          <img
            alt="image"
            src="/cancel-close-svgrepo-com.svg"
            onclick="display_hide('id_screen_ein')"
            className="home-image26"
          />
        </div>
        <div id="id_screen_relays" className="home--test-rel">
          <div className="home-header10">
            <div id="id_relays_box" className="home-relays"></div>
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_relays')"
              className="home-image27"
            />
          </div>
        </div>
        <div id="id_screen_erelay" className="home--edit-rel">
          <div className="home-container06">
            <div className="home-container07">
              <label className="home-text088">
                <span className="home-text089">
                  Relay 
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </label>
              <label id="id_erelay_num" className="home-text091">
                <span className="home-text092">0</span>
                <br></br>
              </label>
            </div>
            <label className="home-text094">
              <span>Name</span>
              <br></br>
            </label>
            <input
              type="text"
              id="id_erelay_name"
              className="home-textinput17 input"
            />
            <button
              type="button"
              onclick="f_erelay_save()"
              className="home-button6 button"
            >
              <span className="home-text097">
                <span className="home-text098">Save</span>
                <br></br>
              </span>
            </button>
          </div>
          <img
            alt="image"
            src="/cancel-close-svgrepo-com.svg"
            onclick="display_hide('id_screen_erelay')"
            className="home-image28"
          />
        </div>
        <div id="id_screen_home_cir" className="home--home-cir">
          <div className="home-header11">
            <img alt="image" src="/bt_home.svg" className="home-image29" />
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_home_cir')"
              className="home-image30"
            />
          </div>
          <div className="home-name2">
            <span className="home-text100">Home circulations</span>
          </div>
          <div className="home-add-circulation">
            <button
              type="button"
              onclick="f_add_circulation()"
              className="home-button7 button"
            >
              Add new circulation
            </button>
          </div>
          <div className="home-circulations">
            <div id="id_circulations_box" className="home-butons"></div>
          </div>
        </div>
        <div id="id_screen_home_cir_edit" className="home--home-cir-edit">
          <div className="home-header12">
            <img alt="image" src="/bt_home.svg" className="home-image31" />
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_home_cir_edit')"
              className="home-image32"
            />
          </div>
          <div className="home-name3">
            <span id="id_home_cir_edit_name" className="home-text101">
              Home circulations
            </span>
          </div>
          <div className="home-circulations1">
            <div className="home-name4">
              <span className="home-text102">
                <span>Name</span>
                <br></br>
              </span>
              <input
                type="text"
                id="id_home_cir_edit_name_input"
                className="home-textinput18 input"
              />
            </div>
            <div className="home-sensor">
              <span className="home-text105">
                <span>Sensor</span>
                <br></br>
              </span>
              <select id="id_home_cir_sel_sensor" className="home-select">
                <option value="Sensor" selected>
                  Sensor
                </option>
              </select>
            </div>
            <div className="home-actuator">
              <span className="home-text108">
                <span>Actuator</span>
                <br></br>
              </span>
              <select id="id_home_cir_sel_act" className="home-select1">
                <option value="Actuator" selected>
                  Actuator
                </option>
              </select>
            </div>
            <div className="home-logic">
              <span className="home-text111">
                <span>Logic</span>
                <br></br>
              </span>
              <select id="id_home_cir_sel_logic" className="home-select2">
                <option value="0" selected>
                  Heat
                </option>
                <option value="1">Cold</option>
                <option value="2">Follow AKU I</option>
                <option value="3">Follow AKU II</option>
              </select>
            </div>
            <div className="home-manual-temperature">
              <span className="home-text114">Temperature</span>
              <input
                type="text"
                id="id_home_cir_edit_temp_input"
                className="home-textinput19 input"
              />
              <span className="home-text115">°C</span>
            </div>
            <div className="home-calendar">
              <span className="home-text116">
                <span>Calendar</span>
                <br></br>
              </span>
              <input
                type="checkbox"
                id="id_home_cir_cb_cal"
                checked="true"
                className="home-checkbox2"
              />
              <span onclick="f_home_cal_edit()" className="home-text119">
                Edit
              </span>
            </div>
            <div className="home-enable">
              <span className="home-text120">Enable</span>
              <input
                type="checkbox"
                id="id_home_cir_cb_enb"
                checked="true"
                className="home-checkbox3"
              />
            </div>
            <span onclick="f_home_cir_advance()" className="home-advance">
              Advance
            </span>
            <div
              id="id_home_cir_edit_delete"
              onclick="f_home_cir_del()"
              className="home-delete"
            >
              <img alt="image" src="/delete.svg" className="home-image33" />
              <span className="home-text121">
                <span className="home-text122">Delete</span>
                <br></br>
              </span>
            </div>
            <div className="home-buttons07">
              <span onclick="f_home_cir_save()" className="home-save7">
                SAVE
              </span>
            </div>
          </div>
        </div>
        <div id="id_screen_reboot" className="home--reboot">
          <span className="home-text124">Reboot Menu</span>
          <img
            alt="image"
            src="/cancel-close-svgrepo-com.svg"
            onclick="display_hide('id_screen_reboot')"
            className="home-image34"
          />
          <div className="home-rebbot-b">
            <div className="home-buttons08">
              <img
                alt="image"
                src="/bt_reboot-esp.svg"
                loading="eager"
                onclick="f_reboot('ESP')"
                className="home-esp"
              />
              <img
                alt="image"
                src="/bt_reboot-stm.svg"
                loading="eager"
                onclick="f_reboot('STM')"
                className="home-stm"
              />
              <img
                alt="image"
                src="/bt_reboot-all3.svg"
                loading="eager"
                onclick="f_reboot('ALL')"
                className="home-all"
              />
            </div>
          </div>
        </div>
        <div id="id_screen_home" className="home-home-box">
          <div id="id_screen_home_template" className="home-home-template">
            <div id="id_home_enablebox" className="home-enable-box">
              <div className="home-container08">
                <span id="id_homebox_name" className="home-text125">
                  Home 1
                </span>
              </div>
              <div className="home-container09">
                <img
                  id="id_homebox_heat"
                  alt="image"
                  src="/sun.svg"
                  className="home-image35"
                />
                <img
                  id="id_homebox_cold"
                  alt="image"
                  src="/snowflake-svgrepo-com.svg"
                  className="home-image36"
                />
                <span id="id_homebox_curr_tmp" className="home-text126">
                  <span>22.6</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div id="home_img_container" className="home-container10"></div>
          </div>
          <div
            id="id_screen_home_container"
            className="home-home-container"
          ></div>
        </div>
        <div
          id="id_screen_calendar"
          onclick="f_update_calendar_local_db()"
          className="home-calendar1"
        >
          <div className="home-header13">
            <img alt="image" src="/cal_home.svg" className="home-image37" />
            <div className="home-container11">
              <span className="home-text129">Calendar</span>
              <span id="id_calendar_name" className="home-name5">
                Home1
              </span>
            </div>
            <img
              alt="image"
              src="/cancel-close-svgrepo-com.svg"
              onclick="display_hide('id_screen_calendar')"
              className="home-image38"
            />
            <span className="home-gap">
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home-days">
            <span
              id="id_calendar_ma"
              lang="0"
              onclick="f_days_bt(this)"
              className="home-text132 class_days"
            >
              Monday
            </span>
            <span
              id="id_calendar_tu"
              lang="1"
              onclick="f_days_bt(this)"
              className="home-text133 class_days"
            >
              Tuesday
            </span>
            <span
              id="id_calendar_we"
              lang="2"
              onclick="f_days_bt(this)"
              className="home-text134 class_days"
            >
              Wednesday
            </span>
            <span
              id="id_calendar_th"
              lang="3"
              onclick="f_days_bt(this)"
              className="home-text135 class_days"
            >
              Thrusday
            </span>
            <span
              id="id_calendar_fr"
              lang="4"
              onclick="f_days_bt(this)"
              className="home-text136 class_days"
            >
              Friday
            </span>
            <span
              id="id_calendar_sa"
              lang="5"
              onclick="f_days_bt(this)"
              className="home-text137 class_days"
            >
              Saturday
            </span>
            <span
              id="id_calendar_su"
              lang="6"
              onclick="f_days_bt(this)"
              className="home-text138 class_days"
            >
              Sunday
            </span>
          </div>
          <div id="id_intervals_box" className="home-intervals"></div>
          <div id="id_calendar_interval" className="home-interval-line">
            <div className="home-container12">
              <input
                type="text"
                value="00:00"
                onblur="f_check_cal_time_input(this)"
                className="home-textinput20 input"
              />
              <span className="home-text139">h</span>
            </div>
            <span className="home-text140">to</span>
            <div className="home-container13">
              <input
                type="text"
                value="24:00"
                onblur="f_check_cal_time_input(this)"
                className="home-textinput21 input"
              />
              <span className="home-text141">h</span>
            </div>
            <div className="home-container14">
              <input
                type="text"
                value="25.0"
                onblur="f_check_cal_temp_input(this)"
                className="home-textinput22 input"
              />
              <span className="home-text142">°C</span>
            </div>
          </div>
          <div className="home-add-del">
            <div onclick="f_calendar_add_bt()" className="home-btplus">
              <span className="home-text143">+</span>
            </div>
            <button
              type="button"
              onclick="f_calendar_save()"
              className="home-button8 button"
            >
              <span className="home-text144">
                <span className="home-text145">Save</span>
                <br></br>
              </span>
            </button>
            <div onclick="f_calendar_add_bt()" className="home-btplus1">
              <span className="home-text147">-</span>
            </div>
          </div>
        </div>
        <div id="id_screen_firmware" className="home--firmware">
          <img
            alt="image"
            src="/cancel-close-svgrepo-com.svg"
            onclick="display_hide('id_screen_firmware')"
            className="home-image39"
          />
          <div className="home-container15">
            <span className="home-text148">Firmware Update</span>
          </div>
          <div className="home-buttons09">
            <div onclick="f_update_web()" className="home-w-band-stm">
              <span className="home-text149">Update</span>
              <span className="home-text150">WEB&amp;STM</span>
            </div>
            <div onclick="f_update_esp()" className="home-w-band-stm1">
              <span className="home-text151">Update</span>
              <span className="home-text152">ESP</span>
            </div>
          </div>
          <div className="home-info4">
            <div className="home-container16">
              <span className="home-text153">
                <span>WEB UI</span>
                <br></br>
              </span>
              <span id="id_update_vr_web" className="home-text156">
                1.0.0
              </span>
            </div>
            <div className="home-container17">
              <span className="home-text157">STM</span>
              <span id="id_update_vr_stm" className="home-text158">
                1.0.0
              </span>
            </div>
            <div className="home-container18">
              <span className="home-text159">ESP</span>
              <span id="id_update_vr_esp" className="home-text160">
                1.0.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

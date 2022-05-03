import React, { useState } from "react";
import "./NavItems.css";
import { ReactComponent as CloseMenu } from "../img/icon-close-menu.svg";
import { ReactComponent as IconPlanning } from "../img/icon-planning.svg";
import { ReactComponent as IconReminder } from "../img/icon-reminders.svg";
import { ReactComponent as IconTodo } from "../img/icon-todo.svg";
import { ReactComponent as IconCalendar } from "../img/icon-calendar.svg";
import { ReactComponent as ArrowUp } from "../img/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../img/icon-arrow-down.svg";
function NavItems() {
  const [featureOpen, setFeatureOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  return (
    <div className="menu-items">
      <ul>
        <li onClick={() => setFeatureOpen(!featureOpen)}>
          Features
          {!featureOpen && (
            <span>
              <ArrowDown />
            </span>
          )}
          {featureOpen && (
            <span>
              <ArrowUp />
            </span>
          )}
        </li>
        {featureOpen && (
          <ul className="dropdown">
            <li>
              <span>
                <IconTodo />
              </span>
              Todo List
            </li>
            <li>
              <span>
                <IconCalendar />
              </span>
              Calender
            </li>
            <li>
              <span>
                <IconReminder />
              </span>
              Reminders
            </li>
            <li>
              <span>
                <IconPlanning />
              </span>
              Planning
            </li>
          </ul>
        )}
        <li onClick={() => setCompanyOpen(!companyOpen)}>
          Company
          {!companyOpen && (
            <span>
              <ArrowDown />
            </span>
          )}
          {companyOpen && (
            <span>
              <ArrowUp />
            </span>
          )}
          {companyOpen && (
            <ul className="dropdown">
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          )}
        </li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <ul className="login">
        <li>Login</li>
        <li className="register">Register</li>
      </ul>
    </div>
  );
}

export default NavItems;

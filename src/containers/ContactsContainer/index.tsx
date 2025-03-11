"use client";
import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import { AdminContext, AdminContextType } from "@/context/admin_context";
import { ErrorState } from "@/types/ContactErrors_Types";

const ContactContainer: React.FC = () => {
  const { details, error, handleDetailsChange, setError, sendEmail } =
    useContext(AdminContext) as AdminContextType;
  const [lineCount, setLineCount] = useState(14); // Default line count

  // Calculate line count based on code content
  useEffect(() => {
    // This counts the number of lines in the code editor content
    const codeContent = document.querySelector(".code-content pre code");
    if (codeContent) {
      const lines = codeContent.innerHTML.split("<br>").length;
      // Add a few extra lines for buffer (you can adjust this number)
      setLineCount(lines + 3);
    }
  }, [details]); // Recalculate when details change

  const handleDetailsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasError = false;
    const newErrors: ErrorState = {
      _name_error: "",
      _email_error: "",
      _message_error: "",
    };

    if (details._name.trim() === "") {
      newErrors._name_error = "Name is required";
      hasError = true;
    }
    if (details._email.trim() === "") {
      newErrors._email_error = "Email is required";
      hasError = true;
    }
    if (details._message.trim() === "") {
      newErrors._message_error = "Message is required";
      hasError = true;
    }

    if (hasError) {
      setError(newErrors);
      return;
    }

    console.log("Submitted Form Details =>", details);

    await sendEmail();
    // alert("Form Submitted Successfully");
  };

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="contactme-container">
      {/* Form Section */}
      <div className="form-section">
        <form onSubmit={handleDetailsSubmit}>
          <div className="contactme-innercontainer">
            <label>_name:</label>
            <input
              type="text"
              value={details._name}
              onChange={(e) => handleDetailsChange("_name", e)}
              className="input-text"
              placeholder="Enter your name"
            />
            {error._name_error && (
              <span className="error">{error._name_error}</span>
            )}
          </div>

          <div className="contactme-innercontainer">
            <label>_email:</label>
            <input
              type="email"
              value={details._email}
              onChange={(e) => handleDetailsChange("_email", e)}
              className="input-text"
              placeholder="Enter your email"
            />
            {error._email_error && (
              <span className="error">{error._email_error}</span>
            )}
          </div>

          <div className="contactme-innercontainer">
            <label>_message:</label>
            <textarea
              value={details._message}
              onChange={(e) => handleDetailsChange("_message", e)}
              className="input-text message-area"
              placeholder="your message here..."
              rows={4}
            />
            {error._message_error && (
              <span className="error">{error._message_error}</span>
            )}
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Vertical Separator */}
      <div className="wall-section-vertical"></div>

      {/* Code Editor Section */}
      <div className="code-section">
        <div className="code-editor">
          <div className="line-numbers">
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i} className="line-number">
                {i + 1}
              </div>
            ))}
          </div>
          <div className="code-content">
            <pre>
              <code>
                <span className="keyword">const</span> [
                <span className="variable">message</span>,{" "}
                <span className="function">setMessage</span>] ={" "}
                <span className="function">useState</span>(&#123;
                <br />
                &nbsp;&nbsp;<span className="property">name</span>:{" "}
                <span className="string">{`${details._name || "''"}`}</span>,
                <br />
                &nbsp;&nbsp;<span className="property">email</span>:{" "}
                <span className="string">{`${details._email || "''"}`}</span>,
                <br />
                &nbsp;&nbsp;<span className="property">message</span>:{" "}
                <span className="string">{`${details._message || "''"}`}</span>,
                <br />
                &nbsp;&nbsp;<span className="property">date</span>:{" "}
                <span className="string">{`${formattedDate || "''"}`}</span>
                <br />
                &#125;);
                <br />
                <br />
                <span className="keyword">const</span>{" "}
                <span className="function">handleChange</span> = (
                <span className="variable">field</span>:{" "}
                <span className="type">string</span>,{" "}
                <span className="variable">value</span>:{" "}
                <span className="type">string</span>) =&gt; &#123;
                <br />
                &nbsp;&nbsp;<span className="function">setMessage</span>((
                <span className="variable">prev</span>) =&gt; (&#123; ...
                <span className="variable">prev</span>, [
                <span className="variable">field</span>]:{" "}
                <span className="variable">value</span> &#125;));
                <br />
                &#125;;
                <br />
                <br />
                <span className="keyword">const</span>{" "}
                <span className="function">handleSubmit</span> ={" "}
                <span className="keyword">async</span> () =&gt; &#123;
                <br />
                &nbsp;&nbsp;<span className="keyword">await</span>{" "}
                <span className="function">sendEmail</span>(
                <span className="variable">message</span>);
                <br />
                &#125;;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
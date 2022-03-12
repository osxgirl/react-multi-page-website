import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          <ul class="list-inline">
            <li class="list-inline-item">This is a list item.</li>
            <li class="list-inline-item">And another one.</li>
            <li class="list-inline-item">But they're displayed inline.</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

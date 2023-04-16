import styles from "./Contact2.module.css";

const Contact2 = () => {
  return (
    <div className={styles.contact2}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content2}>
            <div className={styles.headingAndSupportingText}>
              <div className={styles.heading}>Get in touch</div>
              <div className={styles.supportingText}>
                Our friendly team would love to hear from you.
              </div>
            </div>
            <div className={styles.form}>
              <div className={styles.formFields}>
                <div className={styles.row}>
                  <div className={styles.inputField}>
                    <div className={styles.inputFieldBase}>
                      <div className={styles.inputFieldBase}>
                        <div className={styles.label}>First name</div>
                        <div className={styles.input}>
                          <div className={styles.content3}>
                            <img
                              className={styles.mailIcon}
                              alt=""
                              src="/mail.svg"
                            />
                            <div className={styles.text}>First name</div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/help-icon.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.hintText}>
                        This is a hint text to help user.
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputField}>
                    <div className={styles.inputFieldBase}>
                      <div className={styles.inputFieldBase}>
                        <div className={styles.label}>Last name</div>
                        <div className={styles.input}>
                          <div className={styles.content3}>
                            <img
                              className={styles.mailIcon}
                              alt=""
                              src="/mail1.svg"
                            />
                            <div className={styles.text}>Last name</div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/help-icon1.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.hintText}>
                        This is a hint text to help user.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.inputField3}>
                  <div className={styles.inputFieldBase}>
                    <div className={styles.inputFieldBase}>
                      <div className={styles.label}>Email</div>
                      <div className={styles.input}>
                        <div className={styles.content3}>
                          <img
                            className={styles.mailIcon}
                            alt=""
                            src="/mail.svg"
                          />
                          <div className={styles.text}>you@company.com</div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/help-icon1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.hintText}>
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
                <div className={styles.inputField3}>
                  <div className={styles.inputFieldBase}>
                    <div className={styles.inputFieldBase}>
                      <div className={styles.label}>Phone number</div>
                      <div className={styles.input4}>
                        <div className={styles.dropdown}>
                          <div className={styles.dropdownText}>US</div>
                          <img
                            className={styles.chevronDownIcon}
                            alt=""
                            src="/chevrondown.svg"
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.text}>+1 (555) 000-0000</div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/help-icon1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.hintText}>
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
                <div className={styles.textareaInputField}>
                  <div className={styles.textareaInputFieldBase}>
                    <div className={styles.textareaInputFieldBase}>
                      <div className={styles.label}>Message</div>
                      <div className={styles.input5}>
                        <div className={styles.text1}>Include a message...</div>
                      </div>
                    </div>
                    <div className={styles.hintText}>
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkbox2}>
                    <div className={styles.checkboxBase} />
                  </div>
                  <div className={styles.text}>
                    {`You agree to our friendly `}
                    <span className={styles.privacyPolicy}>privacy policy</span>
                    .
                  </div>
                </div>
              </div>
              <div className={styles.actions}>
                <div className={styles.button}>
                  <div className={styles.buttonBase}>
                    <div className={styles.text6}>Send message</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      </div>
    </div>
  );
};

export default Contact2;

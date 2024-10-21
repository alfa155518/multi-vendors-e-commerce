import * as motion from "framer-motion/client";
import SendButton from "../_components/SendButton";
import "@/css/signup.css";
export default function SignUp() {
  return (
    <div className="sign-up">
      <motion.form
        className="signup-form"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          },
        }}>
        <div className="section-name">
          <span className="text">Sign Up</span>
        </div>
        <input
          type="text"
          placeholder="name"
          name="name"
          autoComplete="any name"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="any email"
        />
        <input type="password" placeholder="Password" name="password" />
        <div className="user-photo">
          <label htmlFor="photo">Chose Img</label>
          <input type="file" name="photo" id="photo" />
          <select name="role">
            <option value="user">user</option>
            <option value="vendor">vendor</option>
          </select>
        </div>
        <SendButton>sign up</SendButton>
      </motion.form>
    </div>
  );
}

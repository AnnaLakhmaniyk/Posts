import { useRef } from "react"
import s from "./UserProfile.module.css"

function ProfileForm({ onChangePassword }) {
  const oldPasswordRef = useRef()
  const newPasswordRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredOldPassword = oldPasswordRef.current.value
    const enteredNewPassword = newPasswordRef.current.value

    onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    })
  }

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <div className={s.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={s.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswordRef} />
      </div>
      <div className={s.action}>
        <button>Change Password</button>
      </div>
    </form>
  )
}

export default ProfileForm

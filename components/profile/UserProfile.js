import ProfileForm from "./ProfileForm"
import s from "./UserProfile.module.css"

function UserProfile() {
  // Redirect away if NOT auth

  async function changePasvordHendler(passwordData) {
    const respons = await fetch("api/user/change-pasvord", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: { "Content-Type": "application/json" },
    })

    const data = await respons.json()

    console.log(data)
  }

  return (
    <section className={s.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasvordHendler} />
    </section>
  )
}

export default UserProfile

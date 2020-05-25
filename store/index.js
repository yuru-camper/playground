export const state = () => ({
    mail_address: '',
    password: '',
    login_state: false
})

export const mutations = {
    login_state(state, mail_address, password) {
        state.mail_address = mail_address
        state.password = password
        state.login_state = true;
    },
    logout_state(state) {
        state.login_state = false;
    }
}

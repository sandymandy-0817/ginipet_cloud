import React, {useState} from 'react';
import '../styles/join.css';
import axios from 'axios'

function Join(props) {
    const [form, setForm] = useState ({
        username: '',
        password: '',
        check_pw: '',
        email: '',
        tel: '',
        agree:''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
        setError('');
        setSuccess('');
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if(form.password !== form.check_pw) {
            setError('비밀번호가 일치하지 않습니다');
            return;
        }
        try {
            await axios.post ('http://localhost:9070/join', {username:form.username, password:form.password, email:form.email, tel:form.tel});

            setSuccess('회원가입이 완료되었습니다');
            setForm({
                username: '',
                password: '',
                check_pw: '',
                email: '',
                tel: '',
                agree: ''
            });
        } catch(err) {
            setError('회원가입 실패 : 아이디가 이미 존재하거나 서버오류');
        }
    }

    return (
        <section className='join'>
            <h2>회원가입</h2>
            {error && <div style={{color:'red'}}>{error}</div>}
            {success && <div style={{color:'green'}}>{success}</div>}
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="username">아이디 : </label>
                    <input type="text" id='username' name='username' placeholder='아이디를 입력해주세요' required onChange={handleChange} value={form.username}/>
                </p>

                <p>
                    <label htmlFor="password">비밀번호 : </label>
                    <input type='password' id='password' name='password' placeholder='비밀번호를 입력해주세요' required onChange={handleChange} value={form.password}/>
                </p>
                <p>
                    <label htmlFor="check_pw">비밀번호 확인 : </label>
                    <input type="password" id='check_pw' name='check_pw' placeholder='비밀번호 확인을 위해 한 번 더 입력해주세요' required onChange={handleChange} value={form.check_pw}/>
                </p>
                
                <p>
                    <label htmlFor="email">이메일 : </label>
                    <input type="email" id='email' name='email' placeholder='이메일을 입력해주세요' required onChange={handleChange} value={form.email}/>
                </p>

                <p>
                    <label htmlFor="tel">전화번호 : </label>
                    <input type="tel" id='tel' name='tel' placeholder='전화번호를 입력해주세요' required onChange={handleChange} value={form.tel}/>
                </p>

                <p className='agree'>
                    <input type="checkbox" id='agree' name='agree' required onChange={handleChange}/>
                    <label htmlFor="agree">이용약관, 개인정보 수집 및 이용, 마케팅 활용 선택에 모두 동의합니다</label>
                </p>
                <p>
                    <button type='submit' className='join_btn'>회원가입</button>
                </p>
            </form>
        </section>
    );
}

export default Join;
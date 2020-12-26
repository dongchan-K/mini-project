import React from 'react';
import { Row, Col, Button, Input } from 'antd';
import styles from './Signin.module.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { sleep } from '../utils';

// 클래스 컴포넌트에서 사용하는 createRef 함수
class Signin extends React.Component {
  _password = React.createRef();

  state = {
    email: '',
    loading: false,
  }
  render () {
    const { email, loading } = this.state;

    const isEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email);

    return (
      <form>
        <Row align="middle" className={styles.signin_row}>
          <Col span={24}>
            <Row className={styles.signin_contents}>
              <Col span={12}>
                <img
                  src="/img/bg_signin.png"
                  alt="Signin"
                  className={styles.signin_bg}
                />
              </Col>
              <Col span={12}>
                <div className={styles.signin_title}>My Books</div>
                <div className={styles.signin_subtitle}>
                  Please Note Your Opinion
                </div>
                <div className={styles.signin_underline} />
                <div className={styles.email_title}>
                  Email
                  <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                  <Input
                    placeholder="Email"
                    autoComplete="email"
                    name="email"
                    className={styles.input}
                    value={this.state.email}
                    onChange={this.change}
                  />
                  {/* <input 
                    type="text" 
                    value={this.state.email} 
                    onChange={this.change}
                    onMouseOver={this._onMouseOver} />
                    {isEmail ? "이메일 맞음" : "이메일 아님"} */}
                </div>
                <div className={styles.password_title}>
                  Password
                  <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                  <Input
                    type="password"
                    autoComplete="current-password"
                    className={styles.input}
                    ref={this._password}
                  />
                  {/* <input 
                    type="password" 
                    ref={this._password}
                    onMouseOver={this._onMouseOver} /> */}
                </div>
                <div className={styles.button_area}>
                  <Button
                    size="large"
                    loading={loading}
                    className={styles.button}
                    onClick={this.click}
                    disabled={!isEmail}
                  >
                    Sign In
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    );
  }

  _onMouseOver = e => {
    this._password.current.focus();
  }

  click = async () => {
    const { email } = this.state;
    const password = this._password.current.input.value;
    console.log('clicked', email, password);


    // 서버에 이메일 패스워드 보내서 인증된 사용자인지 체크
  //   axios.post('https://api.marktube.tv/v1/me', {
  //     email,
  //     password,
  //   }).then((response) => {
  //     console.log(response);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }
    try {
      // 호출 시작 => 로딩 시작
      this.setState({ loading: true });
      const response = await axios.post('https://api.marktube.tv/v1/me', {
      email,
      password,
      });
      // sleep
      await sleep(1000);
      this.setState({ loading: false });
      // 호출 완료 (정상) => 로딩 끝
      console.log(response.data.token);
      // 토큰을 브라우저 어딘가에 저장한다
      localStorage.setItem('token', response.data.token);
      // 페이지를 이동한다.
      this.props.history.push('/');
    } catch(error) {
      this.setState({ loading: false });
      // 호출 완료 (에러) => 로딩 끝
      console.log(error);
    }
  };

  change = (e) => {
    // console.log('change');
    this.setState({ email: e.target.value });
  }
};

export default withRouter(Signin);
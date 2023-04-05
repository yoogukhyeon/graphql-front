import React, { useState } from 'react';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

interface Inputs {
  writer: string;
  title: string;
  content: string;
}

interface Data {
  createBoard: boolean;
}

const POST_BOARD = gql`
  mutation CreateBoard($writer: String!, $title: String!, $content: String!) {
    createBoard(writer: $writer, title: $title, content: $content)
  }
`;

export default function Write() {
  const navigation = useNavigate();
  const [createBoard] = useMutation<Data>(POST_BOARD);
  const [inputs, setInputs] = useState<Inputs>({
    writer: '',
    title: '',
    content: '',
  });

  const { writer, content, title } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (writer === '') {
      alert('작성자를 입력해주세요.');
      return;
    }

    if (title === '') {
      alert('제목을 입력해주세요.');
      return;
    }

    if (content === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    const data = await createBoard({
      variables: { writer, title, content: content.replace(/(?:\r\n|\r|\n)/g, '<br/>') },
    });

    if (data?.data?.createBoard) {
      alert('작성을 완료 했습니다.');
      navigation('/');
    }
  };
  return (
    <WriteWrap>
      <form onSubmit={handleSubmit}>
        <h1 className="title">글작성</h1>
        <div className="writer">
          <input
            onChange={onChange}
            type="text"
            name="writer"
            value={writer}
            id="writer"
            placeholder="작성자를 입력해주세요."
          />
        </div>
        <div className="writer">
          <input
            onChange={onChange}
            type="text"
            name="title"
            value={title}
            id="title"
            placeholder="제목을 입력해주세요."
          />
        </div>
        <div className="text">
          <textarea
            onChange={onChange}
            name="content"
            value={content}
            id="content"
            rows={20}
            placeholder="내용을 입력해주세요."
          >
            regerg
          </textarea>
        </div>
        <div className="btn">
          <button type="submit">작성하기</button>
        </div>
      </form>
    </WriteWrap>
  );
}

const WriteWrap = styled.div`
  height: calc(100vh - 100px);
  form {
    padding: 0 10px;
  }
  .title {
    text-align: center;
    font-size: 30px;
    padding: 15px 0;
  }

  .writer > input {
    width: 100%;
    border: 1px solid #222;
    outline: none;
  }

  .writer + div {
    margin: 30px 0;
  }

  .text > textarea {
    resize: none;
    width: 100%;
    border: 1px solid #222;
    outline: none;
  }

  .btn {
    text-align: center;
  }
`;

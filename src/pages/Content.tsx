import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

interface BoardData {
  no: number;
  title: string;
  content: string;
  views: number;
  likes: number;
}

interface Boards {
  boards: BoardData[];
}

const GET_BOARD_LISTS = gql`
  query getBoardLists {
    boards {
      no
      title
      content
      views
      likes
    }
  }
`;

export default function Content() {
  const navigation = useNavigate();

  const { data: boardLists, loading, error, refetch } = useQuery<Boards>(GET_BOARD_LISTS);

  useEffect(() => {
    refetch();
  }, []);

  if (loading) return <div>LOADING....</div>;
  if (error) return <div>Error....</div>;

  const goToWrite = () => {
    navigation('/write');
  };

  return (
    <ContentWrap>
      <div className="nav">
        <button onClick={goToWrite}>글 작성</button>
      </div>
      <div className="content">
        {boardLists?.boards &&
          boardLists.boards.map((val) => (
            <div className="content_box" key={val.no}>
              <h3 className="content_title">{val.title}</h3>
              <p className="content_txt">{val.content}</p>
              <div className="content_option">
                <span>좋아요: {val.likes}</span>
                <span>조회수: {val.views}</span>
              </div>
            </div>
          ))}
      </div>
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  padding: 20px 0;
  .nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      padding: 15px;
      font-size: 14px;
      color: #222;
      border-radius: 10px;
      background: rgba(230, 230, 239, 0.7);
      font-weight: bold;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .content_box {
      width: 50%;
      padding: 20px 10px;
      border-bottom: 1px solid #eee;

      .content_title {
        font-size: 18px;
        line-height: 24px;
        word-break: break-word;
        font-weight: bold;
        min-height: 35px;
        color: #222;
        cursor: pointer;
      }

      .content_txt {
        font-size: 14px;
        line-height: 20px;
        word-break: break-word;
        color: #222;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        height: 67px;
      }

      .content_option {
        margin-top: 10px;

        span {
          padding: 5px;
          font-size: 12px;
          line-height: 18px;
          display: inline-block;
          cursor: pointer;
        }
      }
      .content_option > span:nth-child(1) {
        color: #13bf9f;
        border: 1px solid #13bf9f;
      }

      .content_option > span:nth-child(2) {
        color: #7765ff;
        border: 1px solid #7765ff;
        margin-left: 15px;
      }
    }
    .content_box:nth-child(2n + 1) {
      border-right: 1px solid #eee;
    }
  }
`;

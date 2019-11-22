import React, { Component } from "react";
import SearchBar from "../components/search_bar";
import JobBox from "../components/job_box";
import Modal from "../components/modal";

export default class job_container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      jobList: [],
      isLoading: false,
      modalState: false,
      currentJob: null
    };
    this.searchHandle = this.searchHandle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  iconsFor(job) {
    const data = {
      is_hot: "fire",
      new: "ribbon",
      pinned: "thumbtack",
      recommended: "thumbs-up",
      remote: "globe"
    };

    return Object.keys(data)
      .filter(key => job[key] === true)
      .map((attr, index) => {
        return (
          <span key={index} className="icon is-medium has-text-info">
            <i className={`fas fa-${data[attr]}`} title={attr}></i>
          </span>
        );
      });
  }

  jobList() {
    if (this.state.isLoading) {
      return (
        <progress className="progress is-large is-info" max="100">
          60%
        </progress>
      );
    } else {
      if (this.state.searchText !== "" && this.state.jobList.length === 0) {
        return (
          <div className="notification">
            There are no results for {this.state.searchText} =(
          </div>
        );
      }
      return this.state.jobList.map((job, index) => {
        return (
          <div key={index} className="tile is-child">
            <JobBox job={job} toggleModal={this.toggleModal} />
          </div>
        );
      });
    }
  }
  jobModal() {
    if (this.state.currentJob) {
      let job = this.state.currentJob;
      return (
        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          title={`${job.title} - ${job.seniority}`}
        >
          {this.iconsFor(job)}
          <h2>Functions</h2>
          <p dangerouslySetInnerHTML={{ __html: job.functions }}></p>
          <h2>Description</h2>
          <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
          <h2>Benefits</h2>
          <p dangerouslySetInnerHTML={{ __html: job.benefits }}></p>
        </Modal>
      );
    }
  }
  searchHandle(q) {
    if (q === "") {
      return false;
    }

    this.setState({ isLoading: true });
    fetch("https://www.getonbrd.com/search/jobs?q=" + q)
      .then(response => response.json())
      .then(data =>
        this.setState({ jobList: data.jobs, searchText: q, isLoading: false })
      );
  }
  toggleModal(job) {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      const currentJob = typeof job === "object" ? job : null;

      return { modalState: newState, currentJob: currentJob };
    });
  }
  render() {
    return (
      <div className="container">
        <SearchBar
          searchHandle={this.searchHandle}
          searchText={this.state.searchText}
        />
        <div className="tile is-ancestor is-vertical is-12">
          {this.jobList()}
        </div>
        {this.jobModal()}
      </div>
    );
  }
}

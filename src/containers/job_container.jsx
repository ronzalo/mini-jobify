import React, { Component } from "react";
import NavBar from "../components/nav_bar";
import JobBox from "../components/job_box";
import Modal from "../components/modal";

export default class job_container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJob: null,
      favoriteJobs: [],
      isLoading: false,
      jobList: [],
      modalState: false,
      searchText: ""
    };
    this.searchHandle = this.searchHandle.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_URL)
      .then(response => response.json())
      .then(data => this.setState({ favoriteJobs: data }))
      .catch(error => console.error("Error:", error));
  }

  isFavorite(job) {
    return (
      this.state.favoriteJobs.length &&
      this.state.favoriteJobs.some(fav => fav.slug === job.id)
    );
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
            <JobBox
              favorite={this.isFavorite(job)}
              job={job}
              toggleFavorite={this.toggleFavorite}
              toggleModal={this.toggleModal}
            />
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
          title={`${job.title} - ${job.seniority} - $${job.salary}`}
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
    fetch(process.env.REACT_APP_GETONBOARD_URL + q)
      .then(response => response.json())
      .then(data =>
        this.setState({ jobList: data.jobs, searchText: q, isLoading: false })
      )
      .catch(error => console.error("Error:", error));
  }

  toggleFavorite(job) {
    const data = {
      slug: job.id,
      url: job.url,
      metadata: job
    };

    fetch(process.env.REACT_APP_BACKEND_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState(state => {
          const favoriteJobs = [...state.favoriteJobs, data];

          return {
            favoriteJobs
          };
        })
      )
      .catch(error => console.error("Error:", error));
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
      <div className="section">
        <NavBar
          searchHandle={this.searchHandle}
          searchText={this.state.searchText}
        />
        <div className="container">
          <div className="tile is-ancestor is-vertical is-12">
            {this.jobList()}
          </div>
          {this.jobModal()}
        </div>
      </div>
    );
  }
}

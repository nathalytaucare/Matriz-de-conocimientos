import React from 'react';
import EmployeeView from './EmployeeView';

const MoreInfoEmployee = () => {
  return (
    <div>

      <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
              </div>
              <div className="modal-body">
                <EmployeeView />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoEmployee;
const EmployeeSearch = ({ dataTeam, dataStatus }) => {
    return (
        <>
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control form-control-sm custom-form" id="floatingInput" placeholder="" />
                        <label for="floatingInput" style={{ color: 'grey' }} >Employee Email</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-sm custom-form" id="floatingInput" placeholder="" />
                        <label for="floatingInput" style={{ color: 'grey' }}  >Employee Name</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select custom-form" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Select Designation</option>
                            {dataTeam.map(item => {
                                return (
                                    <option value={item}>{item}</option>
                                )
                            })}

                        </select>
                        <label for="floatingSelectGrid">Designation</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select custom-form" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Select Status</option>
                            {dataStatus.map(item => {
                                return (
                                    <option value={item}>{item}</option>
                                )
                            })}

                        </select>
                        <label for="floatingSelectGrid">Status</label>
                    </div>
                </div>
                <div class="col-md">
                    <button type="button" class="btn btn-lg btn-search" >SEARCH</button>
                </div>

            </div>
        </>
    );
}

export default EmployeeSearch;